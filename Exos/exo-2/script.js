// you can write js here
console.log('exo-2');

let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = false;
const age = 25;
if (age >= 18 && registeredEarly === false){
    raceNumber = raceNumber + 1000;
}
if (age >= 18 && registeredEarly === true){
    console.log(`racer number ${raceNumber} start at 9:30 am.`)
}else if (age >= 18 && registeredEarly === false){
    console.log(`racer number ${raceNumber} start at 11:00 am.`)
}else if (age < 18 || registeredEarly === false){
    console.log(`racer number ${raceNumber} start at 12:30 am.`)
}else {
    console.log( 'Go to see the registration desk' );
}
