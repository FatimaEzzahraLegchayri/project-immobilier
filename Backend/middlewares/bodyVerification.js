import  {body, validationResult} from 'express-validator'
import { isEmailExist } from '../Models/user-model.js'

export const requestValidation_user = [
    body('username').exists({checkFalsy : true}).withMessage('Username is required').notEmpty().withMessage('Username cannot be empty').isLength({min : 3}).withMessage('Username must be at least 3 characters long'),
    body('email').isEmail().withMessage('Enter a valid email address').exists({checkFalsy : true}).notEmpty()
    .custom(
        async (email)=>{
           const checkEmail = await isEmailExist(email)
           if(checkEmail){
            throw new Error ('email already used.')
           } 
           return true
        }
    ),
    body('password').exists({checkFalsy : true}).withMessage('Password is required').notEmpty().withMessage('Password cannot be empty').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long')
]

export const validate = (req,res,next)=>{
    const error = validationResult(req)
    if(!error.isEmpty()){
        return res.status(400).json({msg : error});
    }
    next()
}
