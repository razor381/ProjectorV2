import HttpStatus from 'http-status-codes';

import * as userServices from '../services/userServices';

/**
 * Get profile data.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function fetch(req, res, next) {
  userServices
    .getUser(req.user.id)
    .then((data) => res.status(HttpStatus.OK).json({ data }))
    .catch((err) => next(err));
}

/**
 * Update profile.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function update(req, res, next) {
  userServices
    .updateUser(req.user.id, req.body)
    .then((data) => res.status(HttpStatus.OK).json({ data }))
    .catch((err) => next(err));
}
