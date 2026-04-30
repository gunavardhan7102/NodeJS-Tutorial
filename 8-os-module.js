const os = require('os')
console.log(os.hostname());
console.log(os.uptime());

const sysdata = {
    name: os.type(),
    release: os.release(),
    memory: os.totalmem(),
    availablemem: os.freemem()
}


console.log(sysdata);



console.log(os.constants.errno);

