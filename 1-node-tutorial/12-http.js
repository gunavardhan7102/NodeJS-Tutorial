
const http = require('http');

const server = http.createServer((req,res)=>{
    // console.log(`Request: ${req}`);
    // console.log(`Response: ${res}`);
    // console.log(req);
    if(req.url == '/'){
res.write('Hi Home');
 res.end();
    }
    else if (req.url == '/guna'){
        res.write('Hi Guna');
 res.end();
    }
    else 
        res.write(`
    <h1>Sorry</h1> </br>
    <a href='/'> Home </a>
    
    `);
 res.end();

})

server.listen(9000)
