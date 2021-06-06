import { Router } from 'express';

import * as postController from '../controllers/posts';

const router = Router();

/**
 * GET /api/posts.
 */
router.get('/', postController.fetchAll);

/**
 * GET /api/posts/:id.
 */
router.get('/:id', postController.fetchById);

/**
 * POST /api/posts.
 */
router.post('/', postController.create);

/**
 * PUT /api/posts/:id.
 */
router.put('/:id', postController.update);

/**
 * DELETE /api/posts/:id.
 */
router.delete('/:id', postController.remove);

export default router;
