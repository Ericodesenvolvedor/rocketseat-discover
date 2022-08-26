const elementEvent = document.querySelector('h1'); 
elementEvent.addEventListener('click', eventTest);

function eventTest(event) {
    console.log(event.type) // Argument event é esperado pelo eventos, nela há propriedades correspondente ao evento realizado.
}