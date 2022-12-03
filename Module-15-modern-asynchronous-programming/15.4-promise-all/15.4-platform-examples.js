const axios = require("axios");
const BASE_URL = "http://localhost:5000";


//get info about player number 1, 2, 4, 5

function getMultiplePlayers(ids=[]){
    let arrayOfGetRequests = ids.map(id=>{
        return axios.get(`${BASE_URL}/players/${id}`)
    })
    console.log(arrayOfGetRequests)
    Promise.allSettled(arrayOfGetRequests)
        .then(responseArray=>{
            responseArray.forEach(response=>{
                console.log(response.value.data);
            })
            // let statusAndDataOnly = responseArray.map((response)=>{
            //     let obj = {
            //         data: response.data,
            //         status: response.status
            //     }
            //     return obj;
            // })

            // console.log(statusAndDataOnly)
        })
        .catch(err=>{
            console.log(err.message)
        })
}

getMultiplePlayers([1,2,50])





// Promise.all([
//     axios.get(`${BASE_URL}/players/1`),
//     axios.get(`${BASE_URL}/players/2`),
//     axios.get(`${BASE_URL}/players/4`),
//     axios.get(`${BASE_URL}/players/5`)
// ]).then((arrayOfResponess)=>{
//     arrayOfResponess.forEach(response=>{
//         console.log(response.data.team);
//     })
// }).catch(err=>{
//     console.log(err.message)
// })


// axios.get(`${BASE_URL}/players/1`)
//     .then(({data})=>{
//         console.log(data)
//     })
//     .catch(err=>{
//         console.log(err.message)
//     })

// axios.get(`${BASE_URL}/players/2`)
//     .then(({data})=>{
//         console.log(data)
//     })
//     .catch(err=>{
//         console.log(err.message)
//     })

// axios.get(`${BASE_URL}/players/4`)
//     .then(({data})=>{
//         console.log(data)
//     })
//     .catch(err=>{
//         console.log(err.message)
//     })

// axios.get(`${BASE_URL}/players/5`)
//     .then(({data})=>{
//         console.log(data)
//     })
//     .catch(err=>{
//         console.log(err.message)
//     })