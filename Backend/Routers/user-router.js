import express from 'express'
const router = express.Router();
import {requestValidation_user, validate} from '../middlewares/bodyVerification.js' 
import {signUp} from '../Controllers/user-controller.js'

router.post('/users',requestValidation_user,validate, signUp);










export default router