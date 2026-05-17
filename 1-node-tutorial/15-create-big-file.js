const fs = require('fs')

// for(let i=0;i<10000;i++){
// fs.writeFileSync('./Content/big.txt',`Hola Guna ${i}\n`,{flag : 'a'})
// }

const streamold = fs.createReadStream('./Content/big.txt');

const stream = fs.createReadStream('./Content/big.txt',{highWaterMark:900000, encoding:'utf-8'});

stream.on('data',(res)=>{
    console.log(res);
    
})

