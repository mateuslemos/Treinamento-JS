const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('Mateus', data => console.log(data));

emitter.emit('Mateus', 'Emitindo eventos');