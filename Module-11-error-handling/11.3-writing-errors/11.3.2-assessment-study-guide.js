//Throwing an array of errors
function findPlayerAveragePoints(players={}, name){
    const errorMessages = [];
    //if player name is not in the players object, have an error pushed to an array
    if(!players.hasOwnProperty(name)){
        errorMessages.push("Player Name not found");
    }
    //if player has not played any games, have an error pushed to an array
    else if(players[name].points.length === 0){
        errorMessages.push("Player has no games played");
    }
    //if player has played in less than 2 games, have an error pushed to an array
    else if(players[name].points.length < 2){
        errorMessages.push("Player does not have enough games to give accurate data");
    }

    //if there are any errors in our array, then throw all the errors 
    if(errorMessages.length>0){
        throw errorMessages;
        console.log("hiiiiiiii")
    }else{
        //if there are no errors in our array, return the player Average points
        const {points} = players[name]
        // console.log(players[name].points)
        // let totalPoints = 0;
        // points.forEach(point=>{
        //     totalPoints+= point;
        // })

        // console.log(totalPoints)

        let totalPoints = points.reduce((totalPoints,point)=>{
            totalPoints+=point;
            return totalPoints
        },0)

        return totalPoints/points.length;
    }

}

let players = {
    "Lebron": {
        points: [30,22,32,26],
        team: "Lakers"
    },
    "Jordan": {
        points: [36,30,30,34],
        team: "Bulls"
    },
    "Rob": {
        points: [],
        team: "JavaScript-ers"
    },
    "Durant": {
        points: [25],
        team: "Nets"
    }
}

console.log(findPlayerAveragePoints(players,"Rob"))