"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateUser = validateUser;
exports.findUser = findUser;

var _joi = _interopRequireDefault(require("joi"));

var _validate = _interopRequireDefault(require("../utils/validate"));

var _userServices = require("../services/userServices");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// user request body validation schema
const schema = _joi.default.object({
  name: _joi.default.string().label('Name').alphanum().min(4).max(30),
  email: _joi.default.string().label('Email').email(),
  photo: _joi.default.string().label('Photo'),
  password: _joi.default.string(),
  password_confirm: _joi.default.ref('password'),
  role: _joi.default.string().valid('user', 'admin', 'mentor')
}).with('password', 'password_confirm');
/**
 * Validate create/update user request.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */


function validateUser(req, res, next) {
  return (0, _validate.default)(req.body, schema).then(() => next()).catch(err => next(err));
}
/**
 * Validate user existence.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */


function findUser(req, res, next) {
  return (0, _userServices.getUser)(req.params.id).then(() => next()).catch(err => next(err));
}
//# sourceMappingURL=userValidator.js.map