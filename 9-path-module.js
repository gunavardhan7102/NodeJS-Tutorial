const path = require('path')
console.log(__dirname);

const newpath = path.join('/Content','Guna','test.txt')
console.log(newpath);

console.log(path.basename(newpath));
console.log(path.extname(newpath));

console.log(path.resolve(__dirname,'Content','subfolder','test.txt'));
