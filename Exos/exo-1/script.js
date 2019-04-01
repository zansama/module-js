// constante kelvin crer
var kelvin = prompt('Quelle est la température en Kelvin aujourd\'hui ?');

// assignation de la variable celsius en fonction de la constante kelvin
var celsius = kelvin - 273;
// assignation de la variable fahreneheit en fonction de la variable celsius
var fahrenheit = celsius * (9/5) + 32;
// mise  la dcimal infrieur de la var fahrenheit
fahrenheit = Math.floor(fahrenheit);
document.write(`The temperature is ${fahrenheit} degrees farhenheit <br>`);

var newton = celsius * (33/100);
newton = Math.floor(newton);
document.write(`The temperature is ${newton} degrees newton`);