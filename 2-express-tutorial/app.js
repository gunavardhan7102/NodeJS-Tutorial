const http = require('http')

const server = http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":'text/html'})
    res.end('<h1>Hola Guna</h1>')
})

server.listen(5000)

//4:22:20