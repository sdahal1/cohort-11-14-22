const axios = require("axios");
const BASE_URL = "http://localhost:5000";
const playersUrl = `${BASE_URL}/players`;

let newPlayer = {
    name: "Magic Johnson",
    team: "Lakers",
    number_championships: 5,
    state: "California",
};

/* 

function addPlayerIfTheyDontExist(newPlayer){
    //check if a player by the name of magic johnson exists. 
    axios.get(`${playersUrl}`)
    .then(({data})=>{
        let foundPlayer = data.find((playerObj)=>{
            return playerObj.name === newPlayer.name
        })
        
        //If the player doesnt not exist, then create a player with the newPlayer object
        if(foundPlayer === undefined){
            axios.post(`${playersUrl}`, newPlayer)
            .then((response)=>{
                console.log("added player")
                console.log(response.data);
            })
            .catch((err)=>{
                console.log(err);
            })
        }else{
            throw new Error("Player name is taken. Insert another player")
        }
        
    })
    .catch((error)=>{
        console.log(error.message)
    })
    
}



*/

function addPlayerIfTheyDontExist(newPlayer) {
    //check if a player by the name of magic johnson exists.
    axios
        .get(`${playersUrl}`)
        .then(({ data }) => {
            let foundPlayer = data.find((playerObj) => {
                return playerObj.name === newPlayer.name;
            });

            return foundPlayer;
        })
        .then((foundPlayer) => {
            if (foundPlayer)
                throw new Error("Player name is taken. Insert another player");
            return axios.post(`${playersUrl}`, newPlayer);
        })
        .then((responseFromPost) => {
            console.log(responseFromPost.data);
        })
        .catch(console.log);
    // .catch((error)=>{
    //     console.log(error)
    // })
}

// addPlayerIfTheyDontExist(newPlayer);

new Promise((resolve, reject) => {
    const random = 8
    random > 5 ? resolve(random) : reject(random);
})
    .then((response) => {
        console.log("Resolved!", response);
        // return response;
    })
    .catch((response) => {
        console.log("Rejected!", response);
        return response;
    })
    .then((response) => {
        console.log("response is this", response)
        console.log("Add 10", response + 10);
    });
