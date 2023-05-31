const http = require('http');
const fs = require('fs');

let indexFile = fs.readFileSync('index.html',"utf-8");

let server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'});
    res.write(indexFile);
    res.end();
})

server.listen(8000,"127.0.0.1");