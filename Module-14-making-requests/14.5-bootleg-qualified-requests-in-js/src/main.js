const axios = require("../utils/axios"); //libarary that lets us make api calls (get, post, put, delete)
const BASE_URL = "http://localhost:5001";


function findAllPlayers(){
  console.log("testinggg")
  return axios.get(`${BASE_URL}/players`)
    .then((response)=>{
      const {data} = response;
      console.log(data)
      return data;
    })
    .catch((err)=>{
        console.log("Sorry that did not work")
    })
}

// findAllPlayers();


function getAllPlayerNames() {
  return axios.get(`${BASE_URL}/players`)
    .then((response)=>{
      let playerObjectsArray = response.data;
      let namesOnly = playerObjectsArray.map((playerObj)=>{
          return playerObj.name;
      })
      console.log(namesOnly)
      return namesOnly;
    })
    .catch((err)=>{
      console.log(err);
    })
}

// getAllPlayerNames()

function getPlayersByState(stateName) {
  axios.get(`${BASE_URL}/players`)
    .then((response)=>{
      let playerObjectsArray = response.data;

      let playersFromGivenState = playerObjectsArray.filter((playerObj)=>{
        return playerObj.state === stateName
      })
      console.log(playersFromGivenState);
      return playersFromGivenState;

    })
}

// getPlayersByState("California");






// function findPlayerById(id){

// }

// function updatePlayerById(id){

// }


// function deletePlayerById(id){
 

// }




module.exports = {
  getAllPlayerNames,
  getPlayersByState,
  findAllPlayers
};
