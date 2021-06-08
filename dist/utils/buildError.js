"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = buildError;

var _httpStatusCodes = _interopRequireDefault(require("http-status-codes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Build error object with format { code, message, details(?) },
 * according to error type [isBoom, isJoi, else Server error].
 *
 * @param {Error} err
 * @returns {Object}
 */
function buildError(err) {
  // Validation errors
  if (err.isJoi) {
    return {
      code: _httpStatusCodes.default.BAD_REQUEST,
      message: _httpStatusCodes.default.getStatusText(_httpStatusCodes.default.BAD_REQUEST),
      details: err.details && err.details.map(err => ({
        message: err.message,
        param: err.path.join('.')
      }))
    };
  } // HTTP errors


  if (err.isBoom) {
    return {
      code: err.output.statusCode,
      message: err.output.payload.message || err.output.payload.error
    };
  } // Consider all other errors as INTERNAL_SERVER_ERROR


  return {
    code: _httpStatusCodes.default.INTERNAL_SERVER_ERROR,
    message: _httpStatusCodes.default.getStatusText(_httpStatusCodes.default.INTERNAL_SERVER_ERROR)
  };
}
//# sourceMappingURL=buildError.js.map