const express = require("express");
const request = require('request');
const app = express();

let todoPath = process.env.url;

app.use(express.urlencoded({extended:false}));

app.get("/", (req,res)=> res.send("Hello"));

app.get("/todos", (req,res)=> {
    request.get(`${todoPath}/todos`, (error, response, body)=>{
        res.send(body);
    });
});

app.post("/addTodo", (req,res)=>{
    request.post(`${todoPath}/addTodo`, {json: {title: req.body.title, desc: req.body.desc}}, (error, response, body)=>{
        res.send(body);
    });
});

app.listen(3000);