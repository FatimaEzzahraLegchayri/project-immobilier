import express from 'express'
const router = express.Router();
import {requestValidation_user, validate} from '../middlewares/bodyVerification.js' 
import {login, signUp} from '../Controllers/user-controller.js'

router.post('/signup',requestValidation_user,validate, signUp);
router.post('/login',login);









export default router