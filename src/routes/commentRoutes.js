import { Router } from 'express';

import * as commentController from '../controllers/comments';
import * as commentValidator from '../validators/commentValidator';
import setLoggedInUser from '../middlewares/auth/setLoggedInUser';

const router = Router();

/**
 * GET /api/comments.
 */
 router.get(
  '/',
  commentController.fetchAll,
);

/**
 * GET /api/comments/:id.
 */
router.get(
  '/:id',
  commentController.fetchById,
);

// routes after this middleware requires authenticated user
router.use(setLoggedInUser);

/**
 * PUT /api/comments/:id.
 */
router.put(
  '/:id',
  commentValidator.findComment,
  commentValidator.validateComment,
  commentController.update,
);

/**
 * DELETE /api/comments/:commentId.
 */
router.delete(
  '/:id',
  commentValidator.findComment,
  commentController.remove,
);

export default router;
