// 1º
let weight;

// 2º
console.log(typeof weight)

// 3º
const nome = 'Eric';
let age = 19;
let stars = 4.5;
let isSubscribed = true;

// 4.1 º
let student = {} 
console.log(typeof student) // object

// 4.2 º
student = {
    nome: 'Eric',
    age: 19,
    stars: 4.5,
    weight: 68,
    isSubscribed: true,
}

// 4.3 º
console.log(`O estudante ${student.nome} de idade ${student.age}, pesa: ${student.weight} kg.`)