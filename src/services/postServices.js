import Boom from '@hapi/boom';

import Post from '../models/post';

/**
 * Get all posts.
 *
 * @returns {Promise}
 */
export function getAllPosts() {
  return Post.fetchAll({ withRelated: ['user'] });
}

/**
 * Get post by id.
 *
 * @param {String|Number} id
 * @returns {Promise}
 */
export function getPost(id) {
  return new Post({ id })
    .fetch({ withRelated: ['user', 'comments'] })
    .then((post) => post)
    .catch(Post.NotFoundError, () => {
      throw Boom.notFound('No post found with given Id');
    });
}

/**
 * Create new post.
 *
 * @param {String} user
 * @param {Object} post
 * @returns {Promise}
 */
export function createPost(user, post) {
  const postBody = { ...post, user };

  return new Post(postBody).save();
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
