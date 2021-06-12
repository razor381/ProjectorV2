import { Router } from 'express';

import * as profileController from '../controllers/profile';
import setLoggedInUser from '../middlewares/auth/setLoggedInUser';

const router = Router();

/**
 * Routes below this middleware requires logged in user.
 */
router.use(setLoggedInUser);

/**
 * GET /api/profile.
 */
router.get(
  '/',
  profileController.fetch,
);

/**
 * PUT /api/profile.
 */
router.put(
  '/',
  profileController.update,
);

export default router;
