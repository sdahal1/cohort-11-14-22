/*
Problem #1

Input: Teams array containing team objects




Write a function that accepts a list of teams, a city name and a player name and returns a team that matches the given city and player

1. should return null if a team cannot be found by city
2. should return null if a team cannot be found by player
3. should return the team if its matching a city and contains the given player

*/

let teams = [
    {
        name: "Lakers",
        city: "Los Angeles",
        players: ["Lebron James", "Russell Westbrook", "Anthony Davis"],
        championships: 20,
    },
    {
        name: "Warriors",
        city: "San Franscisco",
        players: ["Steph Curry", "Klay Thompson", "Andrew Wiggins"],
        championships: 5,
    },
    {
        name: "Knicks",
        city: "New York",
        players: ["Carmelo", "Marbury"],
        championships: 3,
    },
    {
        name: "Nets",
        city: "New York",
        players: ["Vince Carter", "Kevin Durant"],
        championships: 0,
    },
];

function findTeamByCityAndPlayer(teams = [], cityName = "", playerName = "") {
    for (let team of teams) {
        //check if the current team's city matches given cityName
        if (team.city === cityName && team.players.includes(playerName)) {
            //check if the teams players array contains the playerName

            return team;
        }
    }
    return null;
}

// console.log(findTeamByCityAndPlayer(teams, "Los Angeles", "Lebron James"))
// console.log(findTeamByCityAndPlayer())

/*
Problem #2
Input: Team will be an object, cities will be an object


// Team object
let newTeam = {
  name: "Clippers",
  city: "Los Angeles",
  players: ["Kawhi Leonard", "Paul George"],
  championships: 1
}


Cities Object
let cities_usa = {
  "Los Angeles": {
    totalNumberOfPlayers: 3,
    numberOfChampionships: 20,
    teams: ["Lakers"]
  },
  "New York": {
    totalNumberOfPlayers: 4,
    numberOfChampionships: 3,
    teams: ["Knicks", "Nets"]
  },
  "San Franscisco": {
    totalNumberOfPlayers: 3,
    numberOfChampionships: 5,
    teams: ["Warriors"]
  }
}


Add a city from a given team to a given collection of cities and update the cities collection objects info

1. If called with only a team and no cities object, then use an empty object
2. If the given team's city is not in the cities object yet, then create a new key in the cities object with the given team's city and give it keys for numberOfPlayers, numberOfChampionships, and teams 
3. If the cities object already has a city that matches the given team, then update the cities object at that city key to update the number of players, number of championships and add to that cities teams array the given team

*/

let newTeam = {
    name: "Clippers",
    city: "DC",
    players: ["Kawhi Leonard", "Paul George"],
    championships: 1,
};

let cities_usa = {
    "Los Angeles": {
        totalNumberOfPlayers: 3,
        numberOfChampionships: 20,
        teams: ["Lakers"],
    },
    "New York": {
        totalNumberOfPlayers: 4,
        numberOfChampionships: 3,
        teams: ["Knicks", "Nets"],
    },
    "San Franscisco": {
        totalNumberOfPlayers: 3,
        numberOfChampionships: 5,
        teams: ["Warriors"],
    },
};

function addCityToCities(teamObj={}, citiesObj={}) {
    const {city, players, championships, name} = teamObj;
    //check if the citiesObj contains a key with the teamObj's city

    //console.log(citiesObj[city]) //if the city exists in our cities collection, it will give us back an object, otherwise it will be undefined if the city does not exist in our collection

    if(citiesObj[city] === undefined){
        //create a new key in the citiesObj with the name of this city
        citiesObj[city] = {
            totalNumberOfPlayers: players.length,
            numberOfChampionships: championships,
            teams: [name],
        }
    }else{
        //update the citiesObj at that city with data from the teamObj
        citiesObj[city].totalNumberOfPlayers += players.length;
        citiesObj[city].numberOfChampionships += championships;
        citiesObj[city].teams.push(name);
    }

    return citiesObj
}


console.log(addCityToCities(newTeam, cities_usa))


/* 

This function takes a single parameter of cities. It should loop through the cities and return the total championships for everything in the cities

*/
function calculateTotalChampionships() {}

/*

1. should return null if the cities is empty
2. should return a summary of each city stats in the cities object
3. example input:

let cities_usa = {
  "Los Angeles": {
    totalNumberOfPlayers: 3,
    numberOfChampionships: 20,
    teams: ["Lakers"]
  },
  "New York": {
    totalNumberOfPlayers: 4,
    numberOfChampionships: 3,
    teams: ["Knicks", "Nets"]
  },
  "San Franscisco": {
    totalNumberOfPlayers: 3,
    numberOfChampionships: 5,
    teams: ["Warriors"]
  }
}

//example output: "Los Angeles has 20 championships and the following teams: Lakers\n New York has 3 championships and the following teams: Knicks, Nets\n San Franscisco has 5 championships and the following teams: Warriors \n Total Championships: 28"

*/
function printInfo() {}

// console.log(printInfo(cities_usa))
