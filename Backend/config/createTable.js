// backend/createTable.js
const mysql = require('mysql2');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') }); // Charger les variables d'environnement

// Créer une connexion à la base de données
const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'your_password',
    database: process.env.DB_NAME || 'your_database'
});

// Requête de création de table
const createUsersTable = `
CREATE TABLE IF NOT EXISTS users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('client', 'admin') DEFAULT 'client',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)`;

// Connexion et création de la table
db.connect((err) => {
    if (err) {
        console.error('Erreur de connexion à la base de données:', err);
        return;
    }
    console.log('Connexion réussie à la base de données.');

    db.query(createUsersTable, (err, result) => {
        if (err) {
            console.error('Erreur lors de la création de la table:', err);
        } else {
            console.log('Table "users" créée avec succès ou déjà existante.');
        }
        db.end(); // Fermer la connexion une fois terminé
    });
});
