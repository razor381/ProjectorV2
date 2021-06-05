import HttpStatus from 'http-status-codes';

import buildError from './buildError';

/**
 * Error middleware for 404 not found.
 *
 * @param {Object} req
 * @param {Object} res
 */
export function notFound(req, res) {
  res.status(HttpStatus.NOT_FOUND).json({
    error: {
      code: HttpStatus.NOT_FOUND,
      message: HttpStatus.getStatusText(HttpStatus.NOT_FOUND),
    }
  });
}

/**
 * Error middleware for method not allowed.
 * Must be placed at the very bottom of middleware stack.
 *
 * @param {Object} req
 * @param {Object} res
 */
export function methodNotAllowed(req, res) {
  res.status(HttpStatus.METHOD_NOT_ALLOWED).json({
    error: {
      code: HttpStatus.METHOD_NOT_ALLOWED,
      message: HttpStatus.getStatusText(HttpStatus.METHOD_NOT_ALLOWED),
    },
  });
}

/**
 * Handle invalid JSON in request body.
 *
 * @param {Object} err
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function bodyParser(err, req ,res , next) {
  console.log(err.message);

  res.status(err.status).json({
    error: {
      code: err.status,
      message: HttpStatus.getStatusText(err.status),
    },
  });
}

/**
 * Generic error response middleware.
 * For validation errors, http errors and internal server errors.
 *
 * @param {Object} err
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function genericErrorHandler(err, req, res, next) {
  console.log(err.stack);
  const error = buildError(err);

  res.status(error.code).json({ error });
}
