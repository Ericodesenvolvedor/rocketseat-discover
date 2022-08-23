let subject = 'Livros';

function createThink(subject) {
    subject = 'Programação';
    return subject;
}

const pensamento = createThink(subject);

console.log(subject);
console.log(pensamento);