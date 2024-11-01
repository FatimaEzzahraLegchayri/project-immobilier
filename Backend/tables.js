import db from './database.js';

const createAdminTable = `
    CREATE TABLE IF NOT EXISTS admins (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(50) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        email VARCHAR(100) NOT NULL UNIQUE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        role ENUM('admin', 'user') NOT NULL
    )
`;

db.query(createAdminTable, (err, results) => {
    if (err) {
        console.error('Erreur lors de la création de la table admins :', err.stack);
    } else {
        console.log('Table admins créée ou déjà existante.');
    }

    // Ajouter la colonne "role" si elle n'existe pas déjà
    const addRoleColumn = `
        ALTER TABLE admins 
        ADD COLUMN IF NOT EXISTS role ENUM('admin', 'user') NOT NULL
    `;

    db.query(addRoleColumn, (err) => {
        if (err) {
            console.error('Erreur lors de l\'ajout de la colonne role :', err.stack);
        } else {
            console.log('Colonne role ajoutée ou déjà existante.');
        }
        db.end();
    });
});
