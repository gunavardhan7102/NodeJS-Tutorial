const {readFile, writeFile} = require('fs');

readFile('./Content/first.txt','utf-8', (err,res)=>{
    let first, second
    if(res!=null){
         console.log('first case');
        first = res;
    }
     else {
        throw err 
     }
     readFile('./Content/second.txt', 'utf-8', (err,res)=>{
        if(res!=null){
            second = res;
             console.log('second case');
        }
        else{
            throw err;
        }
        writeFile('./Content/result-async.txt', `${first} ${second}`, (err,res)=>{
console.log("Done")
        })
     })
})