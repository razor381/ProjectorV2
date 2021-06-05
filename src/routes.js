import { Router } from 'express';

import userRoutes from './routes/userRoutes';
import postRoutes from './routes/postRoutes';

const router = Router();

router.use('/users', userRoutes);
router.use('/posts', postRoutes);

export default router;
