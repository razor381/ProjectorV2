import Joi from 'joi';

import validate from '../utils/validate';
import { getPost } from '../services/postServices';
import { getUser } from '../services/userServices';

// post request body validation schema
const schema = Joi.object({
  name: Joi
    .string()
    .label('Name')
    .min(4)
    .max(30),

  summary: Joi
    .string()
    .label('Summary')
    .max(100),

  description: Joi
    .string()
    .label('Description'),

  image_cover: Joi
    .string()
    .label('Image Cover'),

  images: Joi
    .array()
    .items(Joi.string())
    .label('Images'),

  user: Joi
    .number()
    .integer()
    .label('User Id'),
});

/**
 * Validate post creator user existence.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function findPostUser(req, res, next) {
  return getUser(req.body.user)
    .then(() => next())
    .catch((err) => next(err));
}

/**
 * Validate create/update Post request.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function validatePost(req, res, next) {
  return validate(req.body, schema)
    .then(() => next())
    .catch((err) => next(err));
}

/**
 * Validate Post existence.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function findPost(req, res, next) {
  return getPost(req.params.id)
    .then(() => next())
    .catch((err) => next(err));
}
