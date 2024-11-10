import bcrypt from 'bcrypt'

import {insertUser,isEmailExist} from '../Models/user-model.js'


export const signUp = async(req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash( password,10)

  insertUser({ username, email, password :hashedPassword }, (err, result) => {

    if (err) {
       console.log(err);
       
      res.status(500).json({ error: 'Error adding user.' });
    } else {
      res.status(201).json({ message: 'User added successfully!', userId: result.insertId });
    }
  });
};

export const login = async(req,res)=>{
  const {email,password} = req.body;
  
  try {
    const user = await isEmailExist(email)
    if(!user){
      return res.status(400).json({messge : "incorrect email"})
    }
    const isPasswordValid = await bcrypt.compare(password, user.password)
    // console.log('user.password', user.password)
    // console.log('isPasswordValid', isPasswordValid)
    if(!isPasswordValid){
      return res.status(400).json({messge : "incorrect credentiels."})
    }
    return res.status(200).json({msg : 'Login successful!',user})
  } catch (error) {
    console.error('Error during sign in:', error);
    return res.status(500).json({ error: 'Something went wrong. Please try again later.' });
  }
}















