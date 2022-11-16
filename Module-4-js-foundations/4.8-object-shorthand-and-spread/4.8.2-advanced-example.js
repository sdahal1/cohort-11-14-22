/* advanced code */

/* 
write a function named updatePlayer() that will accept a team name like "Celtics" and a player object like this: 
let player = {
    firstName: "Lebron",
    lastName: "James",
    points: 32000,
    teams: ["Cavs", "Heat"]
  }


And it will return a new object like this containing the team name added to the list of teams

{
  fullName: 'Lebron James',
  points: 32000,
  teams: [ 'Cavs', 'Heat', 'Lakers' ]
}


*/
function updatePlayer() {
	
}



/* 

Write a function named joinTeams() that will take two different player objects and will return an array containing the teams of both players like this: [ 'Cavs', 'Heat', 'Hornets', 'Clippers', 'Rockets', 'Suns' ]


*/

function joinTeams(playerA, playerB) {
    
}



let player1 = {
    firstName: "Lebron",
    lastName: "James",
    points: 32000,
    teams: ["Cavs", "Heat"]
}

let player2 = {
    firstName: "Chris",
    lastName: "Paul",
    points: 1800,
    teams: ["Hornets", "Clippers", "Rockets", "Suns"]
}

console.log(updatePlayer(player1, "Lakers"))
console.log(joinTeams(player1, player2))
