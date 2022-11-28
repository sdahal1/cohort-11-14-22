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
function getAverageRating(artists = []) {
    if(!artists.length) return null;
    let sum = artists.reduce((sum, artistObj) => {
        sum += artistObj.rating;
        return sum;
    }, 0);

    

    let average = sum / artists.length;
    return Number(average.toFixed(1));
}

console.log(getAverageRating(artists));

// get all the artists who are rated lower than a given number

function getLowRatedArtists(artists = [], rating) {
    if(!artists.length)return null;
    return artists.filter((artist) => {
        return artist.rating < rating;
    });
}

console.log(getLowRatedArtists(artists, 7));

module.exports = { getLowRatedArtists, getAverageRating };
