import Joi from 'joi';

import validate from '../utils/validate';
import { getComment } from '../services/commentServices'

/**
* Post request body validation schema.
*
* TODO: change user & post validation to .string().guid({ version: ['uuidv4'] }).
*/
const schema = Joi.object({
  comment: Joi
    .string()
    .label('Comment')
    .required(),

  user: Joi
    .number()
    .integer()
    .label('User Id'),

  post: Joi
    .number()
    .integer()
    .label('Post Id'),
});

/**
 * Validate create/update Comment request.
 *
 * @param {Object} req
 * @param {Object} _
 * @param {Function} next
 */
export function validateComment(req, _, next) {
  return validate(req.body, schema)
    .then(() => next())
    .catch((err) => next(err));
}

/**
 * Validate Comment existence.
 *
 * @param {Object} req
 * @param {Object} _
 * @param {Function} next
 */
export function findComment(req, _, next) {
  return getComment(req.params.id)
    .then(() => next())
    .catch((err) => next(err));
}
