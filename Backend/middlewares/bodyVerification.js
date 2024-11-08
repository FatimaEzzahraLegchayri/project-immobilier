import  {body, validationResult} from 'express-validator'

export const requestValidation_user = [
    body('username').exists({checkFalsy : true}).notEmpty().withMessage('Username is required').isLength({min : 3}),
    body('email').isEmail().exists({checkFalsy : true}).notEmpty().withMessage('enter a valid email'),
    body('password').exists({checkFalsy : true}).isLength({ min: 8 }).withMessage('Password must be at least 8 characters long')
]

export const validate = (req,res,next)=>{
    const error = validationResult(req)
    if(!error.isEmpty()){
        res.status(400).json({msg : 'All fields are required.'})
        return 

    }
    next()
}
