import { Router } from 'express';

import * as commentController from '../controllers/comments';
import * as commentValidator from '../validators/commentValidator';
import setLoggedInUser from '../middlewares/auth/setLoggedInUser';
import setPostUserIds from '../middlewares/setPostUserIds';

const router = Router({ mergeParams: true });


/**
 * GET /api/posts/:id/comments.
 */
 router.get(
  '/',
  commentController.fetchAllByPost,
);

/**
 * POST /api/posts/:id/comments.
 */
 router.post(
  '/',
  setLoggedInUser,
  setPostUserIds,
  commentValidator.validateComment,
  commentController.create,
);

export default router;
