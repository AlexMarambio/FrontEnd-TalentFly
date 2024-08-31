const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
require("dotenv").config()

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host:"190.107.177.236",
    user: process.env.DB_USUARIO,
    password: process.env.DB_PASS,
    port:"3306",
    database: "cta77813_talenflyDB"
})

app.get('/', (re, res)=> {
    return res.json("From backend");
})

app.get('/testSQL',(req,res)=>{
    const sql = "SELECT * FROM reclutadores";
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.listen(8081, ()=> {
    console.log("listening");
})