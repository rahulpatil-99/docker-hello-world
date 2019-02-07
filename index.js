const express = require("express");
const http = require('http');
const request = require('request');
const app = express();

let todoPath = process.env.url;

app.get("/", (req,res)=> res.send("Hello"));

app.get("/todos", (req,res)=> {
    request.get(`${todoPath}/todos`, (error, response, body)=>{
        res.send(body);
    });
});

http.createServer(app).listen(3000);