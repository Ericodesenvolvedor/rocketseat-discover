const array = ['html', 'css', 'javascript'];

// Adicionando item no começo do array
array.unshift('graphQL');
// Removendo item do começo do array
array.shift();
// Adicionando item no final do array
array.push('typescript');
// Removendo item do final do array
array.pop();
// Pegando elementos
console.log(array.slice(1, 3)) // Ele não modifica o array.
// Removendo elementos de uma determinada posição
array.splice(1, 1) // indicar o indice do item e o tanto de itens.