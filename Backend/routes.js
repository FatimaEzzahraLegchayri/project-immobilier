import express from 'express';
import authController, { authenticateToken } from './Controllers/auth-middleware.js';

const router = express.Router();

router.post('/login', authController.login);


router.get('/dashboard', authenticateToken, (req, res) => {  
    const role = req.user.role;  
    if (role === 'admin') {  
        res.json({ message: 'Vue admin' });  
    } else if (role === 'client') {  
        res.json({ message: 'Vue client' });  
    } else if (role === 'user') {  
        res.json({ message: 'Vue utilisateur' });  
    } else {  
        res.sendStatus(403);  
    }  
});

export default router;
