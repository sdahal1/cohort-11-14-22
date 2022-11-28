//get the average rating of all the artists from the given array
function getAverageRating(artists = []) {
    if (artists.length === 0) {
        return null;
    }
    let sum = 0;
    artists.forEach((artist) => {
        sum += artist.rating;
    });

    return Number((sum / artists.length).toFixed(2));
}

// console.log(getAverageRating(artists));

//hint for 10.3 assessment
function findArtistRatingByName(artists = [], name) {
    if (!Array.isArray(artists)) return null;
    //search the artists array for the first object that matches the name
    let foundArtist = artists.find((artist) => {
        return artist.name === name;
    });

    console.log("found artist is", foundArtist);
    // if(foundArtist === undefined) return null;
    return foundArtist === undefined ? null : foundArtist.rating;
}

// get all the artists who are rated lower than a given number
function getLowRatedArtists(artists = [], rating) {
    let result = artists.filter((artist) => {
        return artist.rating < rating;
    });
    return result;
}
// console.log(getLowRatedArtists(artists, 7));

//hint for module 10.4- assessment
function findArtistByName(artists = [], name) {
    let result = artists.find((artist) => {
        return artist.name === name;
    });

    return result;
}

//hint for module 10.7- assessment
function partitionArtistsByRating(artists = [], rating) {
    if (!Array.isArray(artists)) return [[], []];

    let highRatedArtists = artists.filter((artist) => {
        return artist.rating >= rating;
    });

    let lowRatedArtists = artists.filter((artist) => {
        return artist.rating < rating;
    });

    // let result = [];
    // result.push(highRatedArtists)
    // result.push(lowRatedArtists)
    return [highRatedArtists, lowRatedArtists];
    //or
    // return [...highRatedArtists,...lowRatedArtists]
}

function assignGrade(score) {
    let result = "F";

    if (score > 0.9) {
        result = "A";
    } else if (score > 0.8) {
        result = "B";
    } else if (score > 0.7) {
        result = "C";
    }

    return result;
}

//how do i make these functions available elsewhere so that the test file can access these functions to test them?

// module.exports = findArtistRatingByName;

module.exports = {
    getAverageRating,
    findArtistRatingByName,
    getLowRatedArtists,
    findArtistByName,
    partitionArtistsByRating,
    assignGrade
};
