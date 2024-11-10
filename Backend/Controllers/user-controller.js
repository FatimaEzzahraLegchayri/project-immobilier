import bcrypt from 'bcrypt'

import {insertUser} from '../Models/user-model.js'


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
















