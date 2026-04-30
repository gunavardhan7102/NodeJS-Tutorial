const fs = require('fs')
//  console.log(fs);

const first = fs.readFileSync('./Content/first.txt','utf-8');
console.log(first);

 fs.writeFileSync('./Content/result-sync.txt', first)

// fs.appendFileSync('./Content/first.txt', '\n Hello this is first file')