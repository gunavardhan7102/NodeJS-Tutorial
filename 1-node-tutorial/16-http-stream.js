const fs = require('fs');
const http = require('http');

const server = http.createServer((req,res)=>{
    const text = fs.createReadStream('./Content/big.txt')
    // console.log(text);
    text.on('open',()=>{
        text.pipe(res);
    })
     
})

server.listen(5000)
