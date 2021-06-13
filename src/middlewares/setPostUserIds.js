/**
 * Set post and user ids to request body.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export default function setPostUserIds(req, res, next) {
  if (!req.body.post) req.body.post = req.params.id;
  if (!req.body.user) req.body.user = req.user.id;
  next();
}
