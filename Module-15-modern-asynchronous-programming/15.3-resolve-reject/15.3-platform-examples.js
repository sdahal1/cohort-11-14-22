const axios = require("axios");
const BASE_URL = "http://localhost:5000";

function update(id, body) {
  if (!id || !body) return Promise.reject(false);
  const url = `${BASE_URL}/players/${id}`;
  return axios.put(url, body);
}


let newInfoToUpdateWith = {
    name: "Steph Curry",
    team: "Hornets",
    number_championships: 4,
    state: "North Carolina"
};


// update()
//     .then((response)=>{
//         console.log("response.data is this", response.data)
//     })
//     .catch(err=>{
//         console.log(err);
//     })

Promise.resolve("Wazaaaap")
    .then((response)=> Promise.resolve("uh oh spaghtettio doe"))
    .then(msg=>console.log(msg))
    .catch((err)=>{
        console.log("error .catch happenin", err);
    })



