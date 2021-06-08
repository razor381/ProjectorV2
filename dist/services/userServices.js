"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllUsers = getAllUsers;
exports.getUser = getUser;
exports.createUser = createUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;

var _boom = _interopRequireDefault(require("@hapi/boom"));

var _user = _interopRequireDefault(require("../models/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Get all users.
 *
 * @returns {Promise}
 */
function getAllUsers() {
  return _user.default.fetchAll();
}
/**
 * Get user by id.
 *
 * @param {String|Number} id
 * @returns {Promise}
 */


function getUser(id) {
  return new _user.default({
    id
  }).fetch({
    withRelated: ['posts']
  }).then(user => user).catch(_user.default.NotFoundError, () => {
    throw _boom.default.notFound('No user found with give id');
  });
}
/**
 * Create new user.
 *
 * @param {Object} user
 * @returns {Promise}
 */


function createUser(user) {
  return new _user.default(user).save();
}
/**
 * Update a user.
 *
 * @param {String|Number} id
 * @param {Object} user
 * @returns {Promise}
 */


function updateUser(id, user) {
  return new _user.default({
    id
  }).save(user);
}
/**
 * Delete a user.
 *
 * @param {String|Number} id
 * @returns {Promise}
 */


function deleteUser(id) {
  return new _user.default({
    id
  }).fetch().then(user => user.destroy());
}
//# sourceMappingURL=userServices.js.map