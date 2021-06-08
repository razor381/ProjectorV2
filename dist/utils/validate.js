"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = validate;

var _isEmpty2 = _interopRequireDefault(require("lodash/isEmpty"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Utility helper for Joi validation.
 *
 * @param {Object} body
 * @param {Object} schema
 * @returns {Promise}
 */
function validate(body, schema) {
  const {
    error,
    value
  } = schema.validate(body, {
    abortEarly: true
  });

  if (!(0, _isEmpty2.default)(error)) {
    return Promise.reject(error);
  }

  return Promise.resolve(value);
}
//# sourceMappingURL=validate.js.map