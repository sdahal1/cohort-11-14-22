const axios = require("axios");
const BASE_URL = "http://localhost:5000";


function isThisABallerOrShotCaller({ id, name, team, number_championships, state }) { //return data if all the properties are defined, undefined if any one of those properties are undefined
  // console.log(id, name, team, number_championships, state)
  return id && name && team && number_championships && state;
}


// console.log(isThisABallerOrShotCaller({id:5, name:"Lebron", team: "Lakers", number_championships:4, state: "Cali"}))
//should return a promise that returns the response-> { data: { id: "HwLvy2S", ... }, ... }
//If that request fails, it should return a rejected promise with the following result. Assume id is the value of the players's id property. ["This player in gleague?: Updating player with - - (id: ${id}) failed."]
function update(player={}) {
  return axios.put(`${BASE_URL}/players/${player.id}`, player)
    .then(response=>{
      // console.log(response);
      return response;
    })
    .catch(error=>{
      return [`This player in gleague?: Updating player with - - (id: ${player.id}) failed.`]
    })

}

// update({id:1, name:"LBJ", team: "Lakers", number_championships:4, state: "Cali"})
//   .then(result=>{
//     console.log(result)
//   })



//This function should take an array of player objects. If an array is not provided, the function should return a rejected promise with an error object -> { error: "Inputted argument must be an array." }





function bulkImport(players=[]) {
  //if players is not an array, then return a rejected promise
  if(!Array.isArray(players)) return Promise.reject({ error: "Inputted argument must be an array." })
  
  
  //Before making the PUT request, you must first make sure that all of the players are valid, according to the isThisABallerOrShotCaller() function. If any player is not a true baller, the function should return a rejected promise with an object and an error message, like such: { error: "All players must include relevant properties." }
  let isDataSetValid = players.every((playerObj)=>{
    let result = isThisABallerOrShotCaller(playerObj)
    console.log("result for this player is", result)
    // if (result === undefined){
      //   isDataSetValid = false;
      // }
      return result
    })
    
    if(!isDataSetValid){
      return Promise.reject({ error: "All players must include relevant properties." });
    }
    
    
    //If all of the players are valid, the function will create a request for each of the given players and store those requests inside of an array. Use the update() function to create each of the PUT requests. Finally, use Promise.allSettled() to return a promise that evaluates all of the requests.

    let arrayOfPutRequests = players.map(playerObject=>{
      return update(playerObject);
    })

    // console.log(arrayOfPutRequests);

    return Promise.allSettled(arrayOfPutRequests);
}



let arrayOfNewPlayers = [
  {
    "id": "7",
    "name": "Michael Jordan version 2",
    "team": "Bulls",
    "number_championships": 6,
    "state": "Illinois"
  },
  {
    "name": "Magic Johnson Billonaire Version",
    "team": "Lakers",
    "number_championships": 5,
    "state": "California",
    "id": "8CmgG9Y"
  },
  {
    "name": "Jason Terry",
    "team": "Lakers",
    "number_championships": 1,
    "state": "Massachetues",
    "id": "Wjjj5Ui"
  }
]

bulkImport(arrayOfNewPlayers)