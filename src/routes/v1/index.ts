import express from 'express';
import { userRoutes } from './user';
const router = express.Router();

router.use('/user', userRoutes);

export { router as v1Routes };
