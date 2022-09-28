// Espera duas funções como parâmetro...

console.log("Pedindo Uber");

const promessa = new Promise((resolve, reject) => {
    return resolve('O carro chegou!'); // Caso de certo... [reject = caso de errado.]
});

promessa.then(response => console.log(response));

console.log("Esperando Uber");