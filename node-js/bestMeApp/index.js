const questions = [
    'O que eu aprendi hoje?',
    'O que me deixou aborrecido e o que eu poderia fazer para melhorar?',
    'O que me deixou feliz hoje?',
    'Quantas pessoas ajudei hoje?'
]

const ask = (index = 0) => {
    process.stdout.write("\n\n" + questions[index] + " > ");
}

ask();

const answers = []

process.stdin.on('data', data => {
    answers.push(data.toString().trim()); // Enviando a resposta para o array
    
    // Lógica usada para incrementar indices no array para terminar as perguntas.
    if(answers.length < questions.length) {
        ask(answers.length);
    } else {
        process.exit()
    }
})

process.on('exit', () => {
    console.log(
        `
        O que eu aprendi hoje?
        ${answers[0]}

        O que me deixou aborrecido e o que eu poderia fazer para melhorar?
        ${answers[1]}

        O que me deixou feliz hoje?
        ${answers[2]}

        Quantas pessoas ajudei hoje?
        ${answers[3]}
        `
    )
})