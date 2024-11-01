const mysql = require('mysql2')

const db = mysql.createConnection({
    host: 'sql8.freesqldatabase.com',   
    port: 3306,                    
    user: 'sql8741982',          
    password: 'ImAyJgYdRA',     
    database: 'sql8741982' 

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