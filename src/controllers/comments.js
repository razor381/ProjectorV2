import HttpStatus from 'http-status-codes';

import * as commentServices from '../services/commentServices';

/**
 * Get all comments for a post.
 *
 * @param {Object} _
 * @param {Object} res
 * @param {Function} next
 */
export function fetchAll(_, res, next) {
  commentServices
    .getAllComments()
    .then((data) => res.json({ data }))
    .catch((err) => next(err));
}

/**
 * Get comment by id.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
 export function fetchById(req, res, next) {
  commentServices
    .getComment(req.params.id)
    .then((data) => res.status(HttpStatus.OK).json({ data }))
    .catch((err) => next(err));
}

/**
 * Get all comments for a post.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
 export function fetchAllByPost(req, res, next) {
  commentServices
    .getPostComments(req.params.id)
    .then((data) => res.status(HttpStatus.OK).json({ data }))
    .catch((err) => next(err));
}

/**
 * Create new comment.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function create(req, res, next) {
  commentServices
    .createComment(req.body)
    .then((data) => res.status(HttpStatus.CREATED).json({ data }))
    .catch((err) => next(err));
}

/**
 * Update a comment.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function update(req, res, next) {
  commentServices
    .updateComment(req.params.id, req.user.id, req.body)
    .then((data) => res.status(HttpStatus.OK).json({ data }))
    .catch((err) => next(err));
}

/**
 * Delete a comment.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function remove(req, res, next) {
  commentServices
    .deleteComment(req.params.id, req.user.id)
    .then((data) => res.status(HttpStatus.NO_CONTENT).json({ data }))
    .catch((err) => next(err));
}
