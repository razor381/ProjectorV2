import { Router } from 'express';

import * as authController from '../controllers/auth';
import * as authValidator from '../validators/authValidators';
import * as userValidator from '../validators/userValidator';

const router = Router();

/**
 * POST /api/auth/login.
 */
router.post(
  '/login',
  authValidator.validateLogin,
  authController.login,
);

/**
 * POST /api/auth/signup.
 */
 router.post(
  '/signup',
  userValidator.validateUser,
  authController.signup,
);

export default router;
