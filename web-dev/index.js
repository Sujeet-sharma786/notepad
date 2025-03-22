const express = require('express');
const cors = require('cors');
const connection = require('./config');
const app =express();
const dotenv = require('dotenv')
dotenv.config();
// require('./config.js');

app.use(express.json());
app.use(cors());


const sql = "insert into code(language,code) values (?,?)";
const getQuery = "select * from code";

app.post("/submit-code",(req,resp)=>{
    const {code } = req.body;
    const {lang} = req.body;
    console.log("recieved code: ",lang,code);

    connection.query(sql,[lang,code],(err,result)=>{
        if(err){
            console.log(err);
            return;
        }

        console.log("Data inserted successfully ID: ",result.insertId);
        resp.send({message:"Data inserted successfully..."});
    })
    // console.log("recieved code: ",lang);
    
    
})

app.get('/get-code',(req,resp)=>{
    connection.query(getQuery,(err,result)=>{
        if(err){
            console.log(err);
        }

        resp.send(result);
        console.log
        ("collected data:",result);
    })
})

app.get("/login", (req, resp) => {
    resp.send({ userID:process.env.userID,password:process.env.password});
});

app.post("/delete-code",(req,resp)=>{
    const {ID} = req.body;
    console.log("ID is: ",ID)
    
    const deleteQuery = "delete from code where ID = ?";
    connection.query(deleteQuery,ID,(err,result)=>{
        if(err){
            console.log(err);
        }else{
            resp.send({message:"Done"});
        }

       
    })
})


app.listen(5000);