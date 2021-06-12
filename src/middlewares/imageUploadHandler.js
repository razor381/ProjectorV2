import Boom from '@hapi/boom';
import multer from 'multer';
import sharp from 'sharp';

/**
 * Image file filter for multer.
 *
 * @param {Object} req
 * @param {Object} file
 * @param {Function} cb
 * @returns {Object}
 */
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    return cb(null, true);
  }

  return cb(Boom.badRequest('Invalid image file.'));
}

const uploadPhoto = multer({
  storage: multer.memoryStorage(),
  fileFilter,
});

/**
 * Extract image file uploads from request and place in req.file.
 *
 * @param {String} field
 * @returns {Function}
 */
export function extractImage(field) {
  return uploadPhoto.single(field);
}

/**
 * Returns middleware that formats and saves image files to local and req.body.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export async function formatAndSaveImage(req, res, next) {
  if (!req.file) return next();

  req.body.image_cover = `post-${req.params.id}-${Date.now()}-image.jpeg`;

  await sharp(req.file.buffer)
    .toFormat('jpeg')
    .jpeg({ quality: 90 })
    .toFile(`public/img/posts/${req.body.image_cover}`);

  return next();
};
