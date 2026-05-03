const EventEmitter = require('events')

const customEmit = new EventEmitter();

customEmit.on('Test',()=>{
    console.log('Working');
    
})

 customEmit.emit('Test')

// 3:18:16
