import express from 'express';
import { createUser } from '../controller/user.controller.js';
import { authenticateUser } from '../controller/user.controller.js';



const router = express.Router();

router.post('/user', createUser);
router.get('/users', authenticateUser);

export default router;