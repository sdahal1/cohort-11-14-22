

let topArtists = [
    {name: "Drake", rating: 10}, //0
    {name: "Taylor Swift", rating: 10}, //1
    {name: "J Cole", rating: 9}, //2
    {name: "Kendrick Lamar", rating: 9}, //3
    {name: "Beatles", rating: 10} //4
]


console.log(getRandomArtist(topArtists))
console.log(getRandomArtist([{name: "rob", rating:-5}, {name: "beyonce", rating: 10} ]))

// const getRandomArtist = function(artists){
//     let randomNum = Math.floor(Math.random()*artists.length)
//     let randomArtist = artists[randomNum];
//     return randomArtist
// }

function getRandomArtist(artists) {
    let randomNum = Math.floor(Math.random()*artists.length)

    let randomArtist = artists[randomNum];
    artists.push({name: "Michael Jackson", rating: 10})
    return randomArtist
}

console.log("artists array", topArtists)



// console.log(Math.floor(Math.random()*5))





 