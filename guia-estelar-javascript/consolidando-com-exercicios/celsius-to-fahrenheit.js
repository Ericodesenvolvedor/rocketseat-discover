/*  
    Crie uma função que receba uma string em celsius ou fahrenheit
    e faça a transformação de uma unidade para outra 
    C = (F - 32) * 5/9 
    F = C * 9/5 + 32

*/

function temperatureConverter(converterTo, temperature) {
    switch(converterTo) {
        case 'C': 
            console.log(celsiusToFahrenheit(temperature));
            break;
        case 'F': 
            console.log(fahrenheitToCelsius(temperature));
            break;
        default: 
            console.log('Ops...Algo deu errado na conversão');
    }
}

function celsiusToFahrenheit(temperature) {
    const converterToCelsius = (temperature - 32) * 5 / 9
    return converterToCelsius.toFixed(2);
}

function fahrenheitToCelsius(temperature) {
    const converterToFahrenheit = temperature * 9/5 + 32
    return converterToFahrenheit.toFixed(2);
}

temperatureConverter('F', 21); // Informar para qual deseja converter e a temperatura.
// F = Para fahrenheit
// C = Para celsius 