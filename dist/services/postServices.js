"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllPosts = getAllPosts;
exports.getPost = getPost;
exports.createPost = createPost;
exports.updatePost = updatePost;
exports.deletePost = deletePost;

var _boom = _interopRequireDefault(require("@hapi/boom"));

var _post = _interopRequireDefault(require("../models/post"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Get all posts.
 *
 * @returns {Promise}
 */
function getAllPosts() {
  return _post.default.fetchAll({
    withRelated: ['user']
  });
}
/**
 * Get post by id.
 *
 * @param {String|Number} id
 * @returns {Promise}
 */


function getPost(id) {
  return new _post.default({
    id
  }).fetch({
    withRelated: ['user']
  }).then(post => post).catch(_post.default.NotFoundError, () => {
    throw _boom.default.notFound('No post found with given Id');
  });
}
/**
 * Create new post.
 *
 * @param {Object} post
 * @returns {Promise}
 */


function createPost(post) {
  return new _post.default(post).save();
}
/**
 * Update a post.
 *
 * @param {String|Number} id
 * @param {Object} post
 * @returns {Promise}
 */


function updatePost(id, post) {
  return new _post.default({
    id
  }).save(post);
}
/**
 * Delete a post.
 *
 * @param {String|Number} id
 * @returns {Promise}
 */


function deletePost(id) {
  return new _post.default({
    id
  }).fetch().then(post => post.destroy());
}
//# sourceMappingURL=postServices.js.map