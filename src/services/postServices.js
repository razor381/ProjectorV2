import Boom from '@hapi/boom';

import Post from '../models/post';

/**
 * Get all posts.
 *
 * @returns {Promise}
 */
export function getAllPosts() {
  return Post.fetchAll();
}

/**
 * Get post by id.
 *
 * @param {String|Number} id
 * @returns {Promise}
 */
export function getPost(id) {
  return new Post({ id })
    .fetch()
    .then((post) => post)
    .catch(Post.NotFoundError, () => {
      throw Boom.notFound('No post found with give id');
    });
}

/**
 * Create new post.
 *
 * @param {Object} post
 * @returns {Promise}
 */
export function createPost(post) {
  return new Post(post).save();
}

/**
 * Update a post.
 *
 * @param {String|Number} id
 * @param {Object} post
 * @returns {Promise}
 */
export function updatePost(id, post) {
  return new Post({ id }).save(post);
}

/**
 * Delete a post.
 *
 * @param {String|Number} id
 * @returns {Promise}
 */
export function deletePost(id) {
  return new Post({ id }).fetch().then((post) => post.destroy());
}
