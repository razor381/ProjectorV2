import { Router } from 'express';

import * as postController from '../controllers/posts';
import * as postValidator from '../validators/postValidator';

const router = Router();

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
