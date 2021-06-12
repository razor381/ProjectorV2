import Joi from 'joi';

import validate from '../utils/validate';
import { getUser } from '../services/userServices';

// user request body validation schema
const schema = Joi.object({
  name: Joi
    .string()
    .label('Name')
    .min(4)
    .max(30),

  email: Joi
    .string()
    .label('Email')
    .email(),

  photo: Joi
    .string()
    .label('Photo'),

  password: Joi
    .string()
    .min(8)
    .required()
    .messages({
      'any.required': 'Password field cannot be empty!'
    }),

  password_confirm: Joi
    .any()
    .valid(Joi.ref('password'))
    .required()
    .label('Password Confirmation')
    .messages({ 'any.only': '{{#label}} does not match' }),

  role: Joi
    .string()
    .valid('user', 'admin', 'mentor'),
})
  .with('password', 'password_confirm');

/**
 * Validate create/update user request.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function validateUser(req, res, next) {
  return validate(req.body, schema)
    .then(() => next())
    .catch((err) => next(err));
}

/**
 * Validate user existence.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function findUser(req, res, next) {
  return getUser(req.params.id)
    .then(() => next())
    .catch((err) => next(err));
}
