import express from 'express';
import dotenv from 'dotenv'
dotenv.config()

import userRoutes from './Routers/user-router.js';
import { User } from './Models/user-model.js'; 

const app = express();
app.use(express.json()); 

User();
app.use('/', userRoutes);





const PORT = process.env.DB_PORT;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});