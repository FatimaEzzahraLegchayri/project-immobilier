import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'immo'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database!');

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
        console.error('Error creating admin table:', err.stack);
    } else {
        console.log('Admin table created or already exists.');
    }
     // Now try to add the role column
     const addRoleColumn = `
     ALTER TABLE admins 
     ADD COLUMN role ENUM('admin', 'user') NOT NULL
 `;

 db.query(addRoleColumn, (err, results) => {
     if (err) {
         console.error('Error adding role column:', err.stack);
     } else {
         console.log('Role column added or already exists.');
     }
    db.end();
});
});
})
export default db;
