// backend/index.js  
import express from 'express';  
import cors from 'cors';  
import { signin, signup, authenticateToken } from './Controllers/authController.js'; // Importation des méthodes  

const app = express();  
app.use(cors());  
app.use(express.json());  

// Routes  
app.post('/signin', signin);  
app.post('/signup', signup);  

app.get('/dashboard', authenticateToken, (req, res) => {  
    if (req.user.role === 'admin') {  
        res.json({ message: "Welcome Admin!" });  
    } else if (req.user.role === 'client') {  
        res.json({ message: "Welcome Client!" });  
    } else {  
        res.json({ message: "Welcome User!" });  
    }  
});  

const PORT = process.env.PORT || 5000;  
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));