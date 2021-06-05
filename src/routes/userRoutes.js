import { Router } from 'express';

import * as userController from '../controllers/users';
import { findUser, validateUser } from '../validators/userValidator';

const router = Router();

/**
 * GET /api/users.
 */
router.get(
  '/',
  userController.fetchAll,
);

/**
 * GET /api/users/:id.
 */
router.get(
  '/:id',
  findUser,
  userController.fetchById,
);

/**
 * POST /api/users.
 */
router.post(
  '/',
  validateUser,
  userController.create,
);

/**
 * PUT /api/users/:id.
 */
router.put(
  '/:id',
  findUser,
  validateUser,
  userController.update,
);

/**
 * DELETE /api/users/:id.
 */
router.delete(
  '/:id',
  findUser,
  userController.remove,
);

export default router;
