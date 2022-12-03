const axios = require("axios");

/* 


//get post put delete
function createPlayerIfPlayerNotExists(playerObj){
    //get all the players
    axios.get("http://localhost:5000/players")
    .then((response)=>{
        const {data} = response;
        console.log("after get request", data);
        let foundPlayer = data.find((element)=>{
            return element.name === playerObj.name;
        })
        
        //if found player === undefined then then we can create someone new!
        if(!foundPlayer){
            axios.post("http://localhost:5000/players", playerObj)
            .then((response)=>{
                const {data} = response;
                console.log("after post request", data);
            })
            .catch((err)=>{
                console.log(err)
            })
        }
        //if found player exists then we will throw an error saying that duplicates are not allowed!
        else{
            throw new Error("Player already exists, no duplicate players allowed!")
        }
        
    })
    .catch((error)=>{
        console.log(error.message);
    })
}

*/


function createPlayerIfPlayerNotExists(playerObj){
    //get all the players
    axios.get("http://localhost:5000/players")
        .then((response)=>{
            const {data} = response;
            // console.log("after get request", data);
            let foundPlayer = data.find((element)=>{
                return element.name === playerObj.name;
            })

            return "Young mula cash mula"; //foundPlayer will either be an object or undefined

        })
        .then((foundPlayer)=>{
            if(!foundPlayer){
                return axios.post("http://localhost:5000/players", playerObj);
            }
            throw new Error("Player already exists, no duplicate players allowed!")
        })
        .then((response)=>{
            const {data} = response;
            console.log("after post request", data);
        })
        .catch((error)=>{
            console.log(error.message);
        })
}


let newPlayer =  {
    "name": "Shaq",
    "team": "Celtics",
    "number_championships": 0,
    "state": "Massachetues"
}

createPlayerIfPlayerNotExists(newPlayer);