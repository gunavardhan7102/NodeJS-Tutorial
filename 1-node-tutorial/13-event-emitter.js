const EventEmitter = require('events')

const customEmit = new EventEmitter();

console.log(typeof customEmit);


customEmit.on('Test',(name)=>{
    console.log('Working '+name);
   })

   customEmit.on('Test',()=>{
    console.log('Playing');
   })

  customEmit.emit('Test','Guna')


