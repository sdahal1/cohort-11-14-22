const tournamentData = {
    "game1": { homeTeam: 100, awayTeam: 85 },
    "game2": { homeTeam: 98, awayTeam: 100 },
    "game3": { homeTeam: 50, awayTeam: 51 },
    "game4": { homeTeam: 10, awayTeam: 8 },
};


// Input
// Your input for both functions will be team

// calculateTotalPoints
//The calculateTotalPoints function will take in the tournament object and return a total number of points scored from all teams in all games
function calculateTotalPoints(tournament){
    //get the values from the object
    let values = Object.values(tournament)
    
    //create a totalPoints variable to keep track of the sum of points
    let totalPoints = 0; 
    //loop through the values array using for-of loop
    for(let gameStats of values){
        // totalPoints += gameStats.homeTeam
        // dont need to do this, the += way is more brief and does the same thing //totalPoints = totalPoints + gameStats.homeTeam 
        // totalPoints += gameStats.awayTeam

        //one lineer way
        totalPoints += gameStats.homeTeam + gameStats.awayTeam
    }

    return totalPoints;
}


// console.log(calculateTotalPoints(tournamentData))





// printGameSummarys
// The printGameSummarys function will take in the tournament object and return a string, joined by \n, of the game results for each game

// For example:

// const tournamentData = {
//     "game1": { homeTeam: 100, awayTeam: 85 },
//     "game2": { homeTeam: 98, awayTeam: 100 },
//     "game3": { homeTeam: 50, awayTeam: 51 },
//     "game4": { homeTeam: 10, awayTeam: 8 },
// };

tournamentData['game1']
//printGameSummarys(tournament); //> "Game 1: Home team beat the away team 100-85 \n Game 2: Home team lost to the away team 98-100 \n etc;"

function printGameSummarys(tournament){
    //have a variable to store all the 
    let totalGameSummary = ""
    for(let key in tournament){
        let gameNumber =  key.substring(4)
        // console.log(key.substring(0,4))
        // console.log(key.substring(4))

        let homeTeamScore = tournament[key].homeTeam;
        let awayTeamScore = tournament[key].awayTeam;
        let resultWord;
        if(homeTeamScore > awayTeamScore){
            resultWord = "beat"
        }else{
            resultWord = "lost to"
        }
        console.log(homeTeamScore, awayTeamScore)
        

        let gameResult = `Game ${gameNumber}: Home team ${resultWord} the away team ${homeTeamScore}-${awayTeamScore}\n`
        // console.log(gameResult)
        totalGameSummary += gameResult;
    }

    console.log(totalGameSummary)
}

printGameSummarys(tournamentData)
