// backend/controllers/authController.js  
/*import db from '../config/database.js'; // Importation de la base de données  
import bcrypt from 'bcryptjs';  
import jwt from 'jsonwebtoken';  

// Middleware d'authentification  
export const authenticateToken = (req, res, next) => {  
    const token = req.headers['authorization'];  
    if (!token) return res.sendStatus(403);  

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {  
        if (err) return res.sendStatus(403);  
        req.user = user;  
        next();  
    });  
};  

// Fonction de connexion  
export const signin = (req, res) => {  
    const { username, password } = req.body;  
    const query = `SELECT * FROM users WHERE username = ?`;  

    db.query(query, [username], async (err, results) => {  
        if (err) throw err;  
        if (results.length === 0 || !await bcrypt.compare(password, results[0].password)) {  
            return res.status(401).send('Invalid credentials');  
        }  

        const user = { id: results[0].id, role: results[0].role };  
        const token = jwt.sign(user, process.env.JWT_SECRET);  
        res.json({ token });  
    });  
};  

// Fonction d'inscription  
export const signup = async (req, res) => {  
    const { username, password, role } = req.body;  

    // Vérifier si l'utilisateur existe déjà  
    const existingQuery = `SELECT * FROM users WHERE username = ?`;  
    db.query(existingQuery, [username], async (err, results) => {  
        if (err) throw err;  
        if (results.length > 0) {  
            return res.status(400).send('Username already exists');  
        }  

        // Créer un nouvel utilisateur  
        const hashedPassword = await bcrypt.hash(password, 10);  
        const query = `INSERT INTO users (username, password, role) VALUES (?, ?, ?)`;  

        db.query(query, [username, hashedPassword, role], (err, results) => {  
            if (err) throw err;  
            res.status(201).send('User created');  
        });  
    });  
};*/
// backend/controllers/authController.js  
import db from '../config/database.js'; // Import de la base de données  
import bcrypt from 'bcryptjs';  
import jwt from 'jsonwebtoken';  

// Middleware d'authentification  
export const authenticateToken = (req, res, next) => {  
    const token = req.headers['authorization'];  
    if (!token) return res.sendStatus(403);  

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {  
        if (err) return res.sendStatus(403);  
        req.user = user;  
        next();  
    });  
};  

// Fonction de connexion  
export const signin = (req, res) => {  
    const { username, password } = req.body;  
    const query = `SELECT * FROM users WHERE username = ?`;  

    db.query(query, [username], async (err, results) => {  
        if (err) throw err;  
        if (results.length === 0 || !await bcrypt.compare(password, results[0].password)) {  
            return res.status(401).send('Invalid credentials');  
        }  

        const user = { id: results[0].id, role: results[0].role };  
        const token = jwt.sign(user, process.env.JWT_SECRET);  
        res.json({ token });  
    });  
};  

// Fonction d'inscription  
export const signup = async (req, res) => {  
    const { username, password, role } = req.body;  

    // Vérifier si l'utilisateur existe déjà  
    const existingQuery = `SELECT * FROM users WHERE username = ?`;  
    db.query(existingQuery, [username], async (err, results) => {  
        if (err) throw err;  
        if (results.length > 0) {  
            return res.status(400).send('Username already exists');  
        }  

        // Vérification pour assurer qu'il n'y a qu'un seul admin  
        if (role === 'admin') {  
            const adminCheckQuery = `SELECT * FROM users WHERE role = 'admin'`;  
            db.query(adminCheckQuery, (err, adminResults) => {  
                if (err) throw err;  
                if (adminResults.length > 0) {  
                    return res.status(400).send('An admin user already exists');  
                }  
                createUser(username, password, role, res); // Appel à la fonction pour créer l'utilisateur  
            });  
        } else {  
            createUser(username, password, role, res); // Créer un utilisateur normal  
        }  
    });  
};  

// Fonction pour créer un utilisateur  
const createUser = async (username, password, role, res) => {  
    const hashedPassword = await bcrypt.hash(password, 10);  
    const query = `INSERT INTO users (username, password, role) VALUES (?, ?, ?)`;  

    db.query(query, [username, hashedPassword, role], (err, results) => {  
        if (err) throw err;  
        res.status(201).send('User created');  
    });  
};