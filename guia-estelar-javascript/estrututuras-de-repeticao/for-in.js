const person = {
    name: 'Eric',
    age: 19
}

for (let property in person) {
    console.log(property) // retorna a chave do objeto
    console.log(person[property]) // retorna o valor do objeto.
}