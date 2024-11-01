// backend/config/database.js
import mysql from 'mysql2';
import dotenv from 'dotenv';

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'immobilier'
});

db.connect((err) => {
    if (err) {
        console.error('Erreur de connexion MySQL:', err);
        process.exit(1); // Arrête l'application en cas d'erreur de connexion
    } else {
        console.log('Connexion MySQL réussie.');

        // Création de la table `users` si elle n'existe pas
        const createUsersTableQuery = `
            CREATE TABLE IF NOT EXISTS users (
                id INT AUTO_INCREMENT PRIMARY KEY,
                username VARCHAR(50) NOT NULL,
                password VARCHAR(255) NOT NULL,
                role ENUM('admin', 'client','user') NOT NULL DEFAULT 'client',
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `;

        db.query(createUsersTableQuery, (err, result) => {
            if (err) {
                console.error('Erreur lors de la création de la table `users`:', err);
            } else {
                console.log('Table `users` vérifiée/créée avec succès.');
            }
        });
    }
});

export default db;
