import pool  from '../Config/connectDb.js'

export const User = () => {
    const sql = `
        CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,  
            username VARCHAR(255) NOT NULL,     
            email VARCHAR(255) NOT NULL UNIQUE, 
            password VARCHAR(255) NOT NULL,     
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    `;
    pool.query(sql, (error, results) => {
        if (error) {
            console.error('Error creating users table:', error);
        } else {
            console.log('Users table created successfully', results);
        }
    });

};

export const insertUser = async (userData, callback) => {
    const sql = 'INSERT INTO users SET ?';
    pool.query(sql, userData, callback);
};

export const isEmailExist = async (email) => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM users WHERE email = ?';
        pool.query(sql, [email], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results[0]); 
            }
        });
    });
};