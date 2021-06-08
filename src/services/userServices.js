import Boom from '@hapi/boom';

import User from '../models/user';

/**
 * Get all users.
 *
 * @returns {Promise}
 */
export function getAllUsers() {
  return User.fetchAll();
}

/**
 * Get user by id.
 *
 * @param {String|Number} id
 * @returns {Promise}
 */
export function getUser(id) {
  return new User({ id })
    .fetch({ withRelated: ['posts'] })
    .then((user) => user)
    .catch(User.NotFoundError, () => {
      throw Boom.notFound('No user found with give id');
    });
}

/**
 * Create new user.
 *
 * @param {Object} user
 * @returns {Promise}
 */
export function createUser(user) {
  return new User(user).save();
}

/**
 * Update a user.
 *
 * @param {String|Number} id
 * @param {Object} user
 * @returns {Promise}
 */
export function updateUser(id, user) {
  return new User({ id }).save(user);
}

/**
 * Delete a user.
 *
 * @param {String|Number} id
 * @returns {Promise}
 */
export function deleteUser(id) {
  return new User({ id }).fetch().then((user) => user.destroy());
}
