import express from 'express';
import { register, login } from '../../controller/auth.controller.js';

const router = express.Router();

// Admin registration/login
router.post('/register', (req, res) => register({ ...req, body: { ...req.body, role: 'ADMIN' } }, res));
router.post('/login', login);

export default router;