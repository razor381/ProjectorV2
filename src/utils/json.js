import Boom from '@hapi/boom';
import _isEmpty from 'lodash/isEmpty';

/**
 * Handle empty JSON body requests.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export default function json(req, res, next) {
  const { body, method } = req;
  const disallowedMethods = ['POST', 'PUT', 'PATCH'];

  if (req.is('application/json') && disallowedMethods.includes(method) && _isEmpty(body)) {
    throw Boom.badRequest('Empty JSON');
  }

  next();
}
