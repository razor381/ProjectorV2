import jwt from 'jsonwebtoken';

import User from '../../models/user';


/**
 * Sign and return jwt token.
 *
 * @param {String} id
 * @returns {String}
 */
function signToken(id) {
  return jwt.sign(
    { id },
    process.env.JWT_SECRET_KEY,
    { expiresIn: process.env.JWT_EXPIRES_IN },
  );
}


/**
 * Set cookie in response object.
 *
 * @param {String} token
 * @param {Object} res
 */
function setCookie(token, res) {
  const cookieOptions = {
    expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 3600 * 1000),
    httpOnly: true,
  };

  if (process.env.NODE_ENV === 'production') {
    cookieOptions.secure = true;
  }

  res.cookie('jwt', token, cookieOptions);
}

/**
 * Create and sent jwt token.
 *
 * @param {Object} user
 * @param {Object} res
 * @returns {Object}
 */
function createToken(user, res) {
  const token = signToken(user.id);

  setCookie(token, res);

  return token;
}

/**
 * Login new user.
 *
 * @param {Object} res
 * @param {Object} body
 * @returns {Promise}
 */
 export async function login(res, body) {
  const user = await new User({ email: body.email }).fetch();
  const token = createToken(user, res);

  return { token, user };
}


/**
 * Signup new user.
 *
 * @param {Object} res
 * @param {Object} body
 * @returns {Promise}
 */
export async function signup(res, body) {
  const user = await new User(body).save();
  const token = createToken(user, res);

  return { token, user };
}
