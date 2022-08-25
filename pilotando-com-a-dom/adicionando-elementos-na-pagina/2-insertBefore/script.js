const el = document.querySelector("body");
// Criando elemento 
const newElement = document.createElement('div');
// Inserindo conteúdo.
newElement.innerHTML = '<strong>O rei da pisadinha</strong>';
// Inserindo antes da tag script
const insertBeforeScript = document.querySelector('body script');
// Primeiro argumento: elemento que quer adicionar, segundo argumento: elemento nó
el.insertBefore(newElement, insertBeforeScript); 