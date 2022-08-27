function searchFlag(flagDesejada) {
    console.log('Hello ' + flagDesejada);
}

const buscarModulo = require('./export-process.js');

searchFlag(buscarModulo('--name'));