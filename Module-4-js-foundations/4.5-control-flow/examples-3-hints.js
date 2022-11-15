/*
  Modify each function below to continue working with the suggested syntax.
  
  When a function's parameters reference `team`, it is referring to an object. Each object has the following shape:

   {
     name: "Lakers",
     city: "Los Angeles" ,
     stars: [ "Lebron James", "Russell Westbrook", "Anthony Davis"]
   }
*/
let team = {
    name: "Lakers",
    city: "Los Angeles" ,
    stars: [ "Lebron James", "Russell Westbrook", "Anthony Davis"]
  }

// Use a conditional (ternary) operator below.
function checkIfStarIsOnTeam(team, player) {
    //if the team contains the player, then say "the player is there", otherwise say "we need to acquire this player"

    // if(team.stars.includes(player)){
    //   console.log("the player is there")
    // }else{
    //   console.log("we need to acquire this player")
    // }

    // team.stars.includes(player)?  console.log("the player is there") : console.log("we need to acquire this player")

    return team.stars.includes(player)?  "the player is there" : "we need to acquire this player"

}


console.log(checkIfStarIsOnTeam(team,"Russell Westbrook"))

// Use a `switch` statement below to generate a custom message based on number of championships for the team
function generateChampionBanner(team, numberChampionships) {
    switch(numberChampionships){
      case(0):
        console.log(`${team.name} have ${numberChampionships} championships`)
        break;
      case(1):
        console.log(`${team.name} have ${numberChampionships} championships. City of Champions!`)
        break;
      case(2):
        console.log(`${team.name} have ${numberChampionships} championships. Thats back to back! maybe..`)
        break;
      default:
        console.log("This team is on fire");
        break;
    }
    //if 0 championships
    //if 1 championships
    //if 2 cahmpionships
    //for everything else
}



console.log(generateChampionBanner(team, 0))