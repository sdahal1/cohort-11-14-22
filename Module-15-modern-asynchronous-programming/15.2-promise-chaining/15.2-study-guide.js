const axios = require("axios");
const BASE_URL = "http://localhost:5000";
const playersUrl = `${BASE_URL}/players`;

//get post put delete
//update if player exists
function updatePlayerIfPlayerExists(id, body){
    return axios.get(`http://localhost:5000/players/${id}`)
        .then((responseFromGetRequest)=>{
            const {data} = responseFromGetRequest;
            // console.log(data);

            return axios.put(`http://localhost:5000/players/${id}`, body)
                // .then((response)=>{
                //     const {data} = response;
                //     console.log(data);
                //     return data
                // })
                // .catch((err)=>{
                //     console.log("error on put req", err)
                // })

        })
        .then((responseFromPutRequest)=>{
            const {data} = responseFromPutRequest;
            console.log(data);
            return data
        })
        .catch((err)=>{
            // console.error("Player not found so how we gona update? Huh? Yea thought so");
            console.log(err.message);
            return err.message;
        })
}



let newInfoToUpdateWith = {
    name: "The King From Ohio",
    team: "Lakers",
    number_championships: 4,
    state: "California"
};


updatePlayerIfPlayerExists(1, newInfoToUpdateWith)

