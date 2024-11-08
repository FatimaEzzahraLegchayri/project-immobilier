import pool  from '../Config/connectDb.js'

export const userTable = () => {
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

export const addUser = (userData, callback) => {
    const sql = 'INSERT INTO users SET ?';
    pool.query(sql, userData, callback);
};
// const createUsers = ()=>{
// }
// module.exports = User;
// export default {userTable,addUser}
