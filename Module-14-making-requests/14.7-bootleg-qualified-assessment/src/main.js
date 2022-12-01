const axios = require("../utils/axios"); //libarary that lets us make api calls (get, post, put, delete)
const BASE_URL = "http://localhost:5000";



function findAllPlayers(){
  axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10000`)
    .then(({data})=>{
      console.log(data)
    })
}

// findAllPlayers();


function createPlayer(body){
  //api endpoint is a url to an api
  axios.post(`${BASE_URL}/players`, body)
    .then((response)=>{
      console.log("response is this", response.data)
    })
    .catch(err=>{
      console.log(err)
    })
}


let newPLayer = {
  "name": "Michael Jordan Jr",
  "team": "IDK",
  "number_championships": 0,
  "state": "MJ Crib"
}

// createPlayer(newPLayer)



function showPlayer(id){
  axios.get(`${BASE_URL}/players/${id}`)
    .then(({data})=>{
      console.log(data)
    })
    .catch((err)=>{ //if id is not found, it will throw error -> thus it will hit the .catch()
      console.log(err);
    })
}

showPlayer("200")
// showPlayer("1")
// showPlayer("2")



function updatePlayer(id,body){
  axios.put(`${BASE_URL}/players/${id}`, body) //for update you need to id of the resource you want to update and also the body (information to update with)
    .then(response=>{
      console.log(response.data)
    })
    .catch(err=>{ //if the id is not found on an update, error will occur
      console.log(err)
    })
}

let updatedCurry = {
  "id": "2",
  "name": "Chef Curry aka greatest shooter of all time",
  "team": "Cleveland",
  "number_championships": 5,
  "state": "Ohio",
  "age": 34
}

// updatePlayer(20, updatedCurry)

function deletePlayer(id){
  axios.delete(`${BASE_URL}/players/${id}`)
    .then((response)=>{
      console.log(response.data)
    })
    .catch((err)=>{ //if the id does not exist, it will cause error
      console.log(err)
    })
}


// deletePlayer("ELZbZOs")



module.exports = {
  
};
