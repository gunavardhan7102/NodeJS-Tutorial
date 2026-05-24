const http = require('http')
const {readFileSync} = require('fs')

 const data = readFileSync('./2-express-tutorial/navbar-app/index.html')
 const browser = readFileSync('./2-express-tutorial/navbar-app/browser-app.js')
const logo = readFileSync('./2-express-tutorial/navbar-app/logo.svg')
const style = readFileSync('./2-express-tutorial/navbar-app/styles.css')


const server = http.createServer((req,res)=>{
    console.log(req.url);
   
    
    if(req.url === '/'){
 res.writeHead(200,{"content-type":'text/html'})
    res.write(data)
    res.end()
    }

else if(req.url === '/styles.css'){
    res.writeHead(200,{"content-type":'text/css'})
    res.write(style)
    res.end()
   }

else if(req.url === '/logo.svg'){
    res.writeHead(200,{"content-type":'image/svg+xml'})
    res.write(logo)
    res.end()
   }

else if(req.url === '/browser-app.js'){
    res.writeHead(200,{"content-type":'text/javascript'})
    res.write(browser)
    res.end()
   }

   else if(req.url === '/guna'){
    res.writeHead(200,{"content-type":'text/html'})
    res.write('<h1>Hola Guna</h1>')
    res.end()
   }

   else{
    res.writeHead(404,{"content-type":'text/html'})
    res.write('<h1>Resource did not found</h1>')
    res.end()
   }
})

server.listen(5000)

