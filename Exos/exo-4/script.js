// you can write js here

console.log('exo-4');

var secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];

secretMessage = secretMessage.slice(0, -1);

console.log(secretMessage);

secretMessage.push('to', 'program');

console.log(secretMessage);

var indice = secretMessage.findIndex(mot => mot === "easily");
console.log(indice);
console.log(secretMessage[indice]);
secretMessage[indice] = 'right';
console.log(secretMessage);
secretMessage.shift();
console.log(secretMessage);
secretMessage.unshift('Programming');
console.log(secretMessage);

var remove = secretMessage.findIndex(mot => mot === "get");
var n = 5;
secretMessage.splice(remove, n);
console.log(secretMessage);
secretMessage.splice(remove, 0, 'know');
console.log(secretMessage);
console.log(secretMessage.join());

