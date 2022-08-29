const { EventEmitter } = require('events');
const ev = new EventEmitter();

ev.on('sayMyName', (menssage) => {
    console.log('Eu ouvi você ' + menssage);
})

ev.emit('sayMyName', 'Eric'); // podemos passar argumentos e a função on vai captar.