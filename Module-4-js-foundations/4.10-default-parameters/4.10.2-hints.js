let info = {
  numGames: 5,
  points: 300,
  teamsPlayed: [ "lakers", "bulls", "wizards", "celtics", "heat"]
}


// should convert the points to a pointsPerGame
// should default to 0 if there is no `points` key
// should default to 0 if no stats is provided
function getPointsPerGame({points=0,numGames=1}={}){
  // const {points,numGames} = info;
  if(numGames === 0) console.log("Thou shall not divide by 0");
  return points/numGames
}

// console.log(getPointsPerGame({numGames: 10, points: 200}));
// console.log(getPointsPerGame({points: 200})); //what if the key "numGames" is missing? 
// console.log(getPointsPerGame({numGames: 2})); //what if the key "points" is missing?
// console.log(getPointsPerGame({})); //what if provide an empty object?
// console.log(getPointsPerGame()); //what if we dont even provide any data?



// should return "true" if the opponentName has already been played
// should return false if the opponentName has not been played
// should still work if there is no `teamsPlayed` key
// should still work if no teamInfo is provided
// should still work if no arguments are provided
function checkIfTeamHasPlayed({teamsPlayed=[]}={}, opponentName=""){
  for(let i = 0; i<teamsPlayed.length; i++){
    if(teamsPlayed[i] === opponentName){
      return true
    }
  }
  return false;
}


let info2 = {
  numGames: 5,
  points: 300,
  teamsPlayed: [ "lakers", "bulls", "wizards", "celtics", "heat"]
}

let info3 = {
  numGames: 5,
  points: 300,
}

// console.log(checkIfTeamHasPlayed(info2, "warriors"))
// console.log(checkIfTeamHasPlayed(info3, "warriors"))
// console.log(checkIfTeamHasPlayed())



