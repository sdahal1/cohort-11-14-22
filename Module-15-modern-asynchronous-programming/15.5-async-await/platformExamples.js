const axios = require("axios");
const BASE_URL = "http://localhost:5000";

async function getPlayer(id){
    // return axios.get(`${BASE_URL}/players/${id}`)
    //     .then((response)=>{
    //         const {data} = response;
    //         // console.log("got data", data)
    //         return data.name
    //     })
    //     .catch(err=>{
    //         // console.log(err.message);
    //         return err.message;
    //     })
    
    try{
        let response = await axios.get(`${BASE_URL}/players/${id}`)
        const {data} = response;
        return data.name;
    }catch(error){
        console.log("errorrrr happened", error.message)
        throw error.message
    }
    
}


let player = getPlayer(1000)
player
    .then(nameOfPlayer=>{
        console.log("Name of player is", nameOfPlayer)
    })
    .catch(err=>{
        console.log("errrrrrrrr", err)
    })
