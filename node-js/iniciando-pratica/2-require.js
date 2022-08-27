// require é uma maneira de chamar modulos ativos do nodeJs ou os que a gente criar.

const path = require('path');
// Maneira nativa
console.log(path.basename(__filename));
// Meu modulo
const myModule = require('./3-exports.js');
console.log(myModule);