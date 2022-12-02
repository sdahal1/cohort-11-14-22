const axios = require("axios");
const BASE_URL = "http://localhost:5000";
const playersUrl = `${BASE_URL}/players`;

//get post put delete
//update if player exists
function updatePlayerIfPlayerExists(id, body){
    //check the player exists. if exists, update the player with the given body
    axios.get(`${playersUrl}/${id}`)
        .then(({data})=>{
            return axios.put(`${playersUrl}/${id}`,body)
                
        })
        .then((responseFromPutRequest)=>{
            console.log(responseFromPutRequest.data);
            return responseFromPutRequest.data;
        })
        .catch(err=>{
            //if player is not found then it will go to .catch()
            console.log(err.message)
            return err.message
        })
}



let updatedInfo = {
    name: "Bron Bron",
    team: "Lakers",
    number_championships: 4,
    state: "California"
};


updatePlayerIfPlayerExists(1, updatedInfo)