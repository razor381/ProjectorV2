"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findPostUser = findPostUser;
exports.validatePost = validatePost;
exports.findPost = findPost;

var _joi = _interopRequireDefault(require("joi"));

var _validate = _interopRequireDefault(require("../utils/validate"));

var _postServices = require("../services/postServices");

var _userServices = require("../services/userServices");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// post request body validation schema
const schema = _joi.default.object({
  name: _joi.default.string().label('Name').alphanum().min(4).max(30),
  summary: _joi.default.string().label('Summary').max(100),
  description: _joi.default.string().label('Description'),
  image_cover: _joi.default.string().label('Image Cover'),
  images: _joi.default.array().items(_joi.default.string()).label('Images'),
  user_id: _joi.default.number().integer().label('User Id')
});
/**
 * Validate post creator user existence.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */


function findPostUser(req, res, next) {
  return (0, _userServices.getUser)(req.body.user_id).then(() => next()).catch(err => next(err));
}
/**
 * Validate create/update Post request.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */


function validatePost(req, res, next) {
  return (0, _validate.default)(req.body, schema).then(() => next()).catch(err => next(err));
}
/**
 * Validate Post existence.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */


function findPost(req, res, next) {
  return (0, _postServices.getPost)(req.params.id).then(() => next()).catch(err => next(err));
}
//# sourceMappingURL=postValidator.js.map