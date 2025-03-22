
const dotenv = require('dotenv')
dotenv.config()
// const {createPool} = require("mysql2")
const mysql = require('mysql2');


const connection = mysql.createConnection({
    host:process.env.db_host,
    user:process.env.db_user,
    password:process.env.db_password,
    database:process.env.db_name,
    port:process.env.db_port
});

connection.connect((err)=>{
    if(err){
        console.log(err);
        return;
    }else{
        console.log('connected')
    }
});

connection.query(`desc code;`,(err,res,fields)=>{
    if(err){
        console.log(err);
    }

    return console.log(res);
});



// const pool = createPool({
//     host:process.env.db_host,
//     user:process.env.db_user,
//     password:process.env.db_password,
//     database:process.env.db_name,

//     connectionLimit:10
// });

// pool.query(`select * from student`,(err,result,feilds)=>{
//     if(err){
//         console.log(err);
//     }
//     return console.log(result);
// });


module.exports = connection;












// const mysql = require('mysql2');


// const pool = createPool({
//     host:'localhost',
//     user:'root',
//     password:'nobody#231',
//     database:'myDb',
//     connectionLimit:10
// })

// pool.query(`select * from students`,(err,res,fields)=>{
//     if(err){
//         console.log(err);
//     }

//     return console.log(res);
// });

// creating pool mysql

// const pool = createPool({
//     host:process.env.db_host,
//     user:process.env.db_user,
//     password:process.env.db_password,
//     database:process.env.db_name,
//     connectionLimit:10
// });

// pool.query(`create table CODE(ID int primary key auto_increment,language varchar(20),code varchar(200))`,(error,result,fields)=>{
//     if(err){
//         console.log(err);
//     }

//     return console.log(result);
// })

// pool.query(`select * from student`,(err,result,fields)=>{
//     if(err){
//         console.log(err);
//     }

//     return console.log(result);
// });
// module.exports = pool;

// const connection = mysql.createConnection({
//     host:process.env.db_host,
//     user:process.env.db_user,
//     password:process.env.db_password,
//     database:process.env.db_name,
//     port:process.env.db_port,
//     ssl:{ rejectUnauthorized: false }
// });

// connection.connect((err)=>{
//     if(err){
//         console.log("not conncted, "+ err);
//         return;
//     }else{
//         console.log("connected")
//     }


// });

// console.log(process.env.db_host);

// connection.query(`select * from student`,(err,result,fields)=>{
//     if(err){
//         console.log(err);
//     }

//     return console.log(result);
// })

