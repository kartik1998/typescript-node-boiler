import express from 'express';
import * as userController from '@root/app/controllers/user';
const router = express.Router();

router.get('/hello', userController.getHelloWorld);

export { router as userRoutes };
