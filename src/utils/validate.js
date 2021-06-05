import _isEmpty from 'lodash/isEmpty';

/**
 * Utility helper for Joi validation.
 *
 * @param {Object} body
 * @param {Object} schema
 * @returns {Promise}
 */
export default function validate(body, schema) {
  const { error, value } = schema.validate(body, { abortEarly: true });

  if (!_isEmpty(error)) {
    return Promise.reject(error);
  }

  return Promise.resolve(value);
}
