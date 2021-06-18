import Boom from '@hapi/boom';
import { promisify } from 'util';
import jwt from 'jsonwebtoken';

import { getUser } from '../../services/userServices';

/**
 * Extract user token from request.
 *
 * @param {Object} req
 * @returns {String}
 */
function extractToken(req) {
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    return req.headers.authorization.split(' ')[1];
  }

  if (req.cookies && req.cookies.jwt) {
    return req.cookies.jwt;
  }

  throw Boom.unauthorized('Please login to perform this action');
}

/**
 * Decode jwt token.
 *
 * @param {String} token
 * @returns {Promise}
 */
function decodeToken(token) {
  return promisify(jwt.verify)(token, process.env.JWT_SECRET_KEY);
}

/**
 * Fetch user from database using user id.
 *
 * @param {String} userId
 * @returns
 */
async function findUserFromDB(userId) {
  const user = (await getUser(userId)).toJSON();

  if (!user) {
    throw Boom.badRequest('User associated with provided token does not exist anymore!');
  }

  return user;
}

/**
 * Check for logged in user and put into req.user.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Promise} next
 */
export default async function setLoggedInUser (req, res, next) {
  try {
    const token = extractToken(req);
    const decodedPayload = await decodeToken(token);
    const user = await findUserFromDB(decodedPayload.id);

    req.user = user;

    return next();
  } catch (err) {
    return next(err);
  }
}

/**
 * Restrict routes to certain user roles only.
 * 
 * @param {Object} req 
 * @param {Object} res 
 * @param {Function} next 
 */
export function restrictToAdmin (req, res ,next) {
  if (req.user.role !== 'admin') {
    return next(Boom.unauthorized('You are not permitted to perform this action!'));
  }
  
  next();
}
