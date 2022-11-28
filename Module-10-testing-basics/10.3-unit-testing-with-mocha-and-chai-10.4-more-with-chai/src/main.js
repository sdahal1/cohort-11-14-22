const artists = [
    { name: "Taylor Swift", rating: 9 },
    { name: "Drake", rating: 9.8 },
    { name: "J Cole", rating: 8 },
    { name: "Rob", rating: 6.25 },
    { name: "Kendrick Lamar", rating: 8.5 },
    { name: "Beatles", rating: 10 },
    {
        name: "Random guy from beach who asked me to follow his sound cloud",
        rating: 5,
    },
];


//get the average rating of all the artists from the given array
function getAverageRating(artists=[]) {
    if(artists.length === 0) {
        return null;
    }
    let sum = 0;
    artists.forEach((artist) => {
        sum += artist.rating;
    });

    return Number((sum/artists.length).toFixed(2));
}

console.log(getAverageRating(artists));

function findArtistRatingByName(artists, name) {

}

// get all the artists who are rated lower than a given number

function getLowRatedArtists(artists = [], rating) {
    let result = artists.filter((artist)=>{
        return artist.rating < rating;
    })
    return result;

}
console.log(getLowRatedArtists(artists, 7));

//hint for module 10.7- assessment
function findArtistByName(artists, name) {
    // Test for: A correct artist name is given (i.e. the full object is returned)
    // Test for: An incorrect artist name is given (i.e. null is returned)
}

//how do i make these functions available elsewhere so that the test file can access these functions to test them?
module.exports = {
    getAverageRating,
    findArtistRatingByName,
    getLowRatedArtists,
    artists,
};
