import HttpStatus from 'http-status-codes';

import * as authServices from '../services/auth/authServices';

/**
 * Signup new user.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function signup(req, res, next) {
  authServices
    .signup(res, req.body)
    .then((data) => res.status(HttpStatus.CREATED).json({ data }))
    .catch((err) => next(err));
}

/**
 * Login user.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
 export function login(req, res, next) {
  authServices
    .login(res, req.body)
    .then((data) => res.status(HttpStatus.ACCEPTED).json({ data }))
    .catch((err) => next(err));
}
