//bulk delete given an array of id's-> return a promise that returns the id and name of player that was deleted in an object ({name: "", id:""})
const axios = require('axios')

function bulkDeletePlayers(ids=[]){
    const deleteRequests = ids.map((id)=>{
        return axios.delete(`http://localhost:5000/players/${id}`)
            .then(response=>{
                return {id}
            })
    })

    return Promise.all(deleteRequests)

}

console.log(bulkDeletePlayers(["4coHQ5C", "TnH2JUZ"]))