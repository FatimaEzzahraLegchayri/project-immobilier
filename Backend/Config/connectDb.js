import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()


export const pool = mysql.createConnection({
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD ,
    database : process.env.DB_NAME 
})

    pool.connect((err) => {
        if (err) {
            console.error('Error connecting to the database:', err);
            return;
        }
        console.log('Connected successfully to the database.');
    });


export default  pool;
