/* 
    Crie um algoritmo que transforme as notas do sistema
    numérico para sistema de notas em caracteres tipo A B C

    * de 90 para cima -   A
    * entre 80 - 89   -   B
    * entre 70 - 79   -   C
    * entre 60 - 69   -   D
    * menor que 60    -   F
*/

function mediaFinal(nota) {
    const acimaDe90 = nota > 90;
    const entre80A89 = nota >= 80 && nota <= 89; 
    const entre70A79 = nota >= 70 && nota <= 79; 
    const entre60A69 = nota >= 60 && nota <= 69; 
    
    if(acimaDe90) {
        console.log('A');
    } else if(entre80A89) {
        console.log('B');
    } else if(entre70A79) {
        console.log('C');
    } else if(entre60A69) {
        console.log('D');
    } else {
        console.log('F');
    }
}  

mediaFinal(70); // Informe uma nota.