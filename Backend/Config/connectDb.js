const mysql = require('mysql2')
 require('dotenv').config()


const db = mysql.createConnection({
    host: process.env.db_host,   
    port: process.env.port,                    
    user: process.env.db_user,          
    password: process.env.db_password,     
    database:  process.env.db_name

})

const  connectDb = () =>{
    db.connect((err)=>{
        if(err){
            console.log('Database connection error:', err);
    
        }else{
            console.log('Connected to the cloud MySQL database');
    
        } 

    })

        

    
}
 
module.exports = connectDb