"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchAll = fetchAll;
exports.fetchById = fetchById;
exports.create = create;
exports.update = update;
exports.remove = remove;

var _httpStatusCodes = _interopRequireDefault(require("http-status-codes"));

var userServices = _interopRequireWildcard(require("../services/userServices"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Get all users.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
function fetchAll(req, res, next) {
  userServices.getAllUsers().then(data => res.json({
    data
  })).catch(err => next(err));
}
/**
 * Get user by id.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */


function fetchById(req, res, next) {
  userServices.getUser(req.params.id).then(data => res.json({
    data
  })).catch(err => next(err));
}
/**
 * Create new user.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */


function create(req, res, next) {
  userServices.createUser(req.body).then(data => res.status(_httpStatusCodes.default.CREATED).json({
    data
  })).catch(err => next(err));
}
/**
 * Update a user.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */


function update(req, res, next) {
  userServices.updateUser(req.params.id, req.body).then(data => res.json({
    data
  })).catch(err => next(err));
}
/**
 * Delete a user.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */


function remove(req, res, next) {
  userServices.deleteUser(req.params.id).then(data => res.status(_httpStatusCodes.default.NO_CONTENT).json({
    data
  })).catch(err => next(err));
}
//# sourceMappingURL=users.js.map