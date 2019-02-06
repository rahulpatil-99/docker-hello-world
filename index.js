const express = require("express");
const http = require('http');
const app = express();

app.get("/", (req,res)=> res.send("Hello"));

http.createServer(app).listen(3000);