import { Router } from 'express';

import postCommentRoutes from './postCommentRoutes';

import * as postController from '../controllers/posts';
import * as postValidator from '../validators/postValidator';
import * as imageUploadHandler from '../middlewares/imageUploadHandler';
import setLoggedInUser from '../middlewares/auth/setLoggedInUser';

const router = Router();

router.use(
  '/:id/comments',
  postValidator.findPost,
  postCommentRoutes,
);

/**
 * GET /api/posts.
 */
router.get(
  '/',
  postController.fetchAll,
);

/**
 * GET /api/posts/:id.
 */
router.get(
  '/:id',
  postValidator.findPost,
  postController.fetchById,
);

/**
 * Routes below this middleware requires loggedin user.
 */
router.use(setLoggedInUser);

/**
 * POST /api/posts.
 */
router.post(
  '/',
  postValidator.validatePost,
  postController.create,
);

/**
 * PUT /api/posts/:id.
 */
router.put(
  '/:id',
  postValidator.findPost,
  imageUploadHandler.extractImage('image_cover'),
  imageUploadHandler.formatAndSaveImage,
  postValidator.validatePost,
  postController.update,
);

/**
 * DELETE /api/posts/:id.
 */
router.delete(
  '/:id',
  postValidator.findPost,
  postController.remove,
);

export default router;
