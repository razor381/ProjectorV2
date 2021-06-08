"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = json;

var _boom = _interopRequireDefault(require("@hapi/boom"));

var _isEmpty2 = _interopRequireDefault(require("lodash/isEmpty"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Handle empty JSON body requests.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
function json(req, res, next) {
  const {
    body,
    method
  } = req;
  const disallowedMethods = ['POST', 'PUT', 'PATCH'];

  if (req.is('application/json') && disallowedMethods.includes(method) && (0, _isEmpty2.default)(body)) {
    throw _boom.default.badRequest('Empty JSON');
  }

  next();
}
//# sourceMappingURL=json.js.map