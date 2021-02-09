const http = require('http');
const fs = require('fs')

//set port default in 3000
const port = process.env.PORT || 3000;

//initial variable app to handle module express
const express = require('express')
const app = express()
app.get('/',responseText)
app.get('json',responseJson)
app.get('/static/*',responseStatic)
app.listen(port)

const product = {
    id:1,
    names: "Laptop Dell",
    price: 1500,
    variant:{
        type: "gamer",
        core: "i7 Core"
    }
}

function responseStatic(req,res){
    const filename = `${__dirname}/public${req.url.split('/static')[1]}`
    fs.createReadStream(filename).on("error",()=>respondNotFound(req,res)).pipe(res)
}

function responseText(req,res){
    res.setHeader("Content-Type","text/plain");
    res.end("JS Bootcamp with code.id");
}

function responseJson(req,res){
    res.setHeader("Content-Type","application/json");
    res.end(JSON.stringify(product));
}

function respondNotFound(req,res){
    res.writeHead(404,{"Content-Type":"text/plain"})
    res.end("Page Not Found")
}

