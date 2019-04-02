// you can write js here

console.log('exo-5');
var input = prompt('taper ce que vous vooulez !');
var voyels = ['A','E','I','O','U','Y','a','e','i','o','u','y'];
var resultArray = [];

var input = input.split('');
console.log(input);
// for (let i = 0; i < input.length; i++){
//     for (let j = 0; j < voyels.length; j++){
//         if (input[i] === voyels[j]){
//             resultArray.push(input[i]);
//         }
//     }
// }
for (let i = 0; i < input.length; i++){
if (voyels.indexOf(input[i])!=-1){
    resultArray.push(input[i]);
}
}
console.log(resultArray);
console.log(resultArray.join().toUpperCase());