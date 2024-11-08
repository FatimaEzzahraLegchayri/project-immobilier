
import {addUser} from '../Models/user-model.js'


export const createUser = (req, res) => {
  const { username, email, password } = req.body;

  addUser({ username, email, password }, (err, result) => {
    if (err) {
       
      res.status(500).json({ error: 'Error adding user.' });
    } else {
      res.status(201).json({ message: 'User added successfully!', userId: result.insertId });
    }
  });
};

