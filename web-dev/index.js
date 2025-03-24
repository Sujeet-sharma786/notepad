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

const queryArray= ["insert into DP(lang,code) values (?,?)",
    "insert into Tree(lang,code) values (?,?)",
    "insert into Graph(lang,code) values (?,?)",
    "insert into Recursion(lang,code) values (?,?)","select * from DP",
    "select * from Tree","select * from Graph","select * from Recursion","delete from DP where id = ?",
    "delete from Tree where id = ?","delete from Graph where id = ?","delete from Recursion where id = ?"]

app.post("/store-DP",(req,resp)=>{
    const {code} = req.body;
    const {lang } = req.body;
    connection.query(queryArray[0],[lang,code],(err,result)=>{
        if(err){
            console.log(err);
        }else{
            resp.send({message:"DP-code inserted successfully.."})
        }
        
    })
})
app.post("/store-Tree",(req,resp)=>{
    const {code} = req.body;
    const {lang } = req.body;
    connection.query(queryArray[1],[lang,code],(err,result)=>{
        if(err){
            console.log(err);
        }else{
            resp.send({message:"Tree-code inserted successfully.."})
        }
        
    })
})
app.post("/store-Graph",(req,resp)=>{
    const {code} = req.body;
    const {lang } = req.body;
    connection.query(queryArray[2],[lang,code],(err,result)=>{
        if(err){
            console.log(err);
        }else{
            resp.send({message:"Graph-code inserted successfully.."})
        }
        
    })
})
app.post("/store-Recursion",(req,resp)=>{
    const {code} = req.body;
    const {lang } = req.body;
    connection.query(queryArray[3],[lang,code],(err,result)=>{
        if(err){
            console.log(err);
        }else{
            resp.send({message:"Recursion-code inserted successfully.."})
        }
        
    })
})
// app.post("/submit-code",(req,resp)=>{
//     const {code } = req.body;
//     const {lang} = req.body;
//     console.log("recieved code: ",lang,code);

//     connection.query(sql,[lang,code],(err,result)=>{
//         if(err){
//             console.log(err);
//             return;
//         }

//         console.log("Data inserted successfully ID: ",result.insertId);
//         resp.send({message:"Data inserted successfully..."});
//     })
   
    
    
// })

app.get('/get-DP',(req,resp)=>{
    connection.query(queryArray[4],(err,result)=>{
        if(err){
            console.log(err);
        }

        resp.send(result);
        console.log
        ("collected data:",result);
    })
})

app.get('/get-Tree',(req,resp)=>{
    connection.query(queryArray[5],(err,result)=>{
        if(err){
            console.log(err);
        }

        resp.send(result);
        console.log
        ("collected data:",result);
    })
})
app.get('/get-Graph',(req,resp)=>{
    connection.query(queryArray[6],(err,result)=>{
        if(err){
            console.log(err);
        }

        resp.send(result);
        console.log
        ("collected data:",result);
    })
})
app.get('/get-Recursion',(req,resp)=>{
    connection.query(queryArray[7],(err,result)=>{
        if(err){
            console.log(err);
        }

        resp.send(result);
        console.log
        ("collected data:",result);
    })
})
app.post("/delete-Dp",(req,resp)=>{
    const {id} = req.body;
    console.log("ID is: ",id)
    // const deleteQuery = `delete from DP where id = ${id}`;
    connection.query(queryArray[8],id,(err,result)=>{
        if(err){
            console.log(err);
        }else{
            resp.send({message:"Done"});
        }

       
    })
})
app.post("/delete-Tree",(req,resp)=>{
    const {ID} = req.body;
    // console.log("ID is: ",ID)
    connection.query(queryArray[9],ID,(err,result)=>{
        if(err){
            console.log(err);
        }else{
            resp.send({message:"Done"});
        }

       
    })
})
app.post("/delete-Graph",(req,resp)=>{
    const {ID} = req.body;
    // console.log("ID is: ",ID)
    connection.query(queryArray[10],ID,(err,result)=>{
        if(err){
            console.log(err);
        }else{
            resp.send({message:"Done"});
        }

       
    })
})
app.post("/delete-Recursion",(req,resp)=>{
    const {ID} = req.body;
    // console.log("ID is: ",ID)
    connection.query(queryArray[11],ID,(err,result)=>{
        if(err){
            console.log(err);
        }else{
            resp.send({message:"Done"});
        }

       
    })
})


// app.get('/get-code',(req,resp)=>{
//     connection.query(getQuery,(err,result)=>{
//         if(err){
//             console.log(err);
//         }

//         resp.send(result);
//         console.log
//         ("collected data:",result);
//     })
// })

app.get("/login", (req, resp) => {
    resp.send({ userID:process.env.userID,password:process.env.password});
});

// app.post("/delete-code",(req,resp)=>{
//     const {ID} = req.body;
//     console.log("ID is: ",ID)
    
//     const deleteQuery = "delete from code where ID = ?";
//     connection.query(deleteQuery,ID,(err,result)=>{
//         if(err){
//             console.log(err);
//         }else{
//             resp.send({message:"Done"});
//         }

       
//     })
// })


app.listen(5000);