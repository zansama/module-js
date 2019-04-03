// Partie 8 code academy
console.log("exo-6");

// // commenter cette ligne de code.
// création d'un nouvel objet "joeInfo"
// var joeInfo = {
//     name: "Joe's house",
//     rooms: 5,
//     garage: false,
//     bathrooms: 1 + 2,
//     cars: ['Clio', 'Van'],
// };


var team = {
    _player : [{
        firstName : 'Billy',
        lastName:'The Kid',
        age: '954'
            }],
    _games : [{
        opponent: 'Broncos',
        teamPoints: 42,
        opponentPoints: 27
    }]
}


function addPlayer(first, last, age) {
    var player = {};
    player.firstName = first;
    player.lastName = last;
    player.age = age;
    team._player.push(player);

}


function addMatch(opponent, teamPoints, opponentPoints) {
    var match = {};
    match.opponent = opponent;
    match.teamPoints = teamPoints;
    match.opponentPoints = opponentPoints;
    team._games.push(match);

}

addPlayer('Clement', 'Mortas', 18);
addPlayer('Luffy', 'Monkey D', 17);
addPlayer('Naruto', 'Uzumaki', 21);
addPlayer('Vador', 'Dark', 23);
addPlayer('San', 'Goku', 16);
addMatch('Grizzly',125,18);
addMatch('Lions',95,82);
addMatch('Pigs',73,77);
addMatch('Eagles',142,125);
addMatch('Wolf',98,102);
addMatch('Tiger',96,8);
addMatch('Shark',25,108);
console.log(team._player);
console.log(team._games);

function sumTeamPoints() {
   let total =0;
  team._games.forEach(function (match) {
      total += match.teamPoints;
      console.log(match);
  })
    console.log(total);
}

function moyOpponentPoints() {
    let totalOpponentPoint = 0;
    team._games.forEach(function (match) {
        totalOpponentPoint += match.opponentPoints;
    })
    var nombresMatch = 0;
    for( var match in team._games ) {
        if( team._games.hasOwnProperty(match) ) {
            nombresMatch += 1;
        }
    }
  var moy = totalOpponentPoint / nombresMatch;
    console.log(totalOpponentPoint);
    console.log(nombresMatch);
    console.log(Math.floor(moy));
}

function oldPlayer() {
    let agePlayer = [];
    team._player.forEach(function (age) {
        agePlayer.push(age.age);
    })
    console.log(agePlayer);
    console.log(Math.max(...agePlayer));
}

function sortPlayerAlphabetically(){
    team._player.sort(function (a, b) {
        var nameA=a.firstName.toLowerCase(), nameB=b.firstName.toLowerCase()
        if (nameA < nameB) //sort string ascending
            return -1
        if (nameA > nameB)
            return 1
        return 0
    });
    console.log(team._player);
}

sumTeamPoints();
moyOpponentPoints();
oldPlayer();
sortPlayerAlphabetically();
// afficher le nombre de voitures de Joe

// changer le nombre de salle de bains de Joe : il n'en possède au'une.

// Joe vient d'acquérir un garage changer la structure pour le refléter.