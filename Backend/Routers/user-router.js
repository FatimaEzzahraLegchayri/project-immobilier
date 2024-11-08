import express from 'express'
const router = express.Router();
import {requestValidation_user, validate} from '../middlewares/bodyVerification.js' 
import {createUser} from '../Controllers/user-controller.js'

router.post('/users',requestValidation_user,validate, createUser);

export default router