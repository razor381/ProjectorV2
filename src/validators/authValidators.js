import Boom from '@hapi/boom';

import User from '../models/user';
import { getUserByEmail } from '../services/userServices';

/**
 * Validate login credentials.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @returns {Promise}
 */
export async function validateLogin(req, res, next) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw Boom.badRequest('Email and Password required for login action');
    }

    const user = await getUserByEmail(email);
    const isPasswordCorrect = await User.doesPasswordMatch(password, user.password);

    if (!user || !isPasswordCorrect) {
      throw Boom.badRequest('Invalid Email or Password!');
    }

    return next();
  } catch (err) {
    return next(err);
  }
}
