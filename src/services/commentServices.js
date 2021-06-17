import Comment from '../models/comment';

/**
 * Get all comments.
 *
 * @returns {Promise}
 */
 export function getAllComments() {
  return Comment.fetchAll();
}

/**
 * Get comment by id.
 *
 * @param {String} id
 * @returns {Promise}
 */
 export function getComment(id) {
  return Comment
    .where({ id })
    .fetch({ withRelated: ['user', 'post'] })
    .then((comment) => comment);
}

/**
 * Get all comments related to a post.
 *
 * @param {String} post
 * @returns {Promise}
 */
export function getPostComments(post) {
  return Comment
    .where({ post })
    .orderBy('updated_at', 'DESC')
    .fetchAll({ withRelated: ['user'] });
}

/**
 * Create new comment.
 *
 * @param {Object} body
 * @returns {Promise}
 */
export function createComment(body) {
  return new Comment(body).save();
}

/**
 * Update a comment.
 *
 * @param {String} id
 * @param {String} user
 * @param {Object} comment
 * @returns {Promise}
 */
export function updateComment(id, user, comment) {
  return new Comment({ id, user }).save(comment);
}

/**
 * Delete a comment.
 *
 * @param {String} id
 * @param {String} user
 * @returns {Promise}
 */
export function deleteComment(id, user) {
  return new Comment({ id, user })
    .fetch()
    .then((comment) => comment.destroy());
}
