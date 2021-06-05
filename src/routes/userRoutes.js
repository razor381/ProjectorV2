import { Router } from 'express';

import * as userController from '../controllers/users';

const router = Router();

/**
 * GET /api/users.
 */
router.get('/', userController.fetchAll);

/**
 * GET /api/users/:id.
 */
router.get('/:id', userController.fetchById);

/**
 * POST /api/users.
 */
router.post('/', userController.create);

/**
 * PUT /api/users/:id.
 */
router.put('/:id', userController.update);

/**
 * DELETE /api/users/:id.
 */
router.delete('/:id', userController.delete);

export default router;
