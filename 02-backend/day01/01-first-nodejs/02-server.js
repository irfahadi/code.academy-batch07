//load module http = core module
const http = require('http');

//set port default in 1337
const port = process.env.PORT || 1337;

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
    res.setHeader("Content-Type","application/json");
    res.end(JSON.stringify(product))
}).listen(port);
console.log(`Server listening on port ${port}`)
