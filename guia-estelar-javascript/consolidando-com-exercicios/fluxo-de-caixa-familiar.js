/*
    Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
        * receitas: [] 
        * despesas: []
    Agora, crie uma função que irá calcular o total de receitas e 
    despesas e irá mostrar uma mensagem se a família está com 
    saldo positivo ou negativo, seguido do valor do saldo.
*/

let receitas = [100, 200, 300, 500];
let despesas = [120, 70, 412];

function calcularGastos(receitas, despesas) {
    let acumuladorReceitas = 0;
    let acumuladorDespesas = 0;

    for (let totalReceitas of receitas) {
        acumuladorReceitas += totalReceitas;
    }

    for (let totalDespesas of despesas) {
        acumuladorDespesas += totalDespesas;
    }

    console.log(analisarGastos(acumuladorReceitas, acumuladorDespesas));
}

calcularGastos(receitas, despesas);

function analisarGastos(acumuladorReceitas, acumuladorDespesas) {
    const contaFinal = acumuladorReceitas - acumuladorDespesas;
    let mensagem;
    
    if(contaFinal < 0) {
        mensagem = `Vocês estão falidos! Saldo atual: ${contaFinal}`;
    } else {
        mensagem = `Vocês ainda tem dinheiro na conta! ${contaFinal}`;
    }

    return mensagem;
}