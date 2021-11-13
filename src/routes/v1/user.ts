import express from 'express';
import * as userController from '@root/app/controllers/user';
const router = express.Router();

router.post('/', userController.insertUser);

export { router as userRoutes };
