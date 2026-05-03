const EventEmitter = require('events')

const customEmit = new EventEmitter();

customEmit.on('Test',()=>{
    console.log('Working');
    
})

 customEmit.emit('Test')

// console.log(typeof customEmit);
