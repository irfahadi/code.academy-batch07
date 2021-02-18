//load module http = core module
const http = require('http');

//set port default in 1337
const port = process.env.PORT || 3000;

const product = {
    id:1,
    names: "Laptop Dell",
    price: 1500,
    variant:{
        type: "gamer",
        core: "i7 Core"
    }
}

// create method ha 2 params => request(req), respond(res) & open port 1337
const server = http.createServer(function(req,res){
    if(req.url === '/') responseText (req,res);
    if(req.url === '/json') responseJson (req,res);
    respondNotFound(req,res);
}).listen(port);

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
console.log(`Server listening on port ${port}`)
