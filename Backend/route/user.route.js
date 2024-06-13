import express from 'express';
import { createUser } from '../controller/user.controller.js';
import { getUsers } from '../controller/user.controller.js';



const router = express.Router();

router.post('/user', createUser);
router.get('/users', getUsers);

export default router;