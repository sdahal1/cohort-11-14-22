const BASE_URL = "http://localhost:5000";


function isThisABallerOrShotCaller({ id, name, team, number_championships, state }) {
  return id && name && team && number_championships && state;
}


//should return a promise that returns the response-> { data: { id: "HwLvy2S", ... }, ... }
//If that request fails, it should return a rejected promise with the following result. Assume id is the value of the players's id property. ["This player in gleague?: Updating player with - - (id: ${id}) failed."]
function update(player={}) {}


//This function should take an array of player objects. If an array is not provided, the function should return a rejected promise with an error object -> { error: "Inputted argument must be an array." }

//Before making the PUT request, you must first make sure that all of the players are valid, according to the isThisABallerOrShotCaller() function. If any player is not a true baller, the function should return a rejected promise with an object and an error message, like such: { error: "All players must include relevant properties." }


//If all of the players are valid, the function will create a request for each of the given players and store those requests inside of an array. Use the update() function to create each of the PUT requests. Finally, use Promise.allSettled() to return a promise that evaluates all of the requests.


function bulkImport(players=[]) {}