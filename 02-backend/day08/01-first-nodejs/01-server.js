//load module http = core module
const http = require('http');

//set port default in 1337
const port = process.env.PORT || 1337;

// create method ha 2 params => request(req), respond(res) & open port 1337
const server = http.createServer(function(req,res){
    res.end("Hellow Bootcamp Nodejs");
}).listen(port);
console.log(`Server listening on port ${port}`)
