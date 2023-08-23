const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id) => {
    console.log(`data received user name is ${name} with id ${id}`);
})
customEmitter.on('response', () => {
    console.log(`some other logic here`);
})
customEmitter.emit('response','vishwas', 31) //emit method is used to emit our event i.e, 'on' 
// should be called after the 'on' method means first listen for the response and then we emit that event