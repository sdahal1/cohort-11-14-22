let robsPlaylist = [
    {
        title: "Blessings",
        artist: "Chance The Rapper",
        albums: ["A", "B", "C"],
    },
    // {
    //     title: "Hussle and Motivate",
    //     artist: "Nipsey Hussle",
    //     albums: ["D", "E", "F"],
    // },
    // {
    //     title: "Brand new",
    //     artist: "Drake",
    //     albums: ["G", "H", "I"],
    // },
    // {
    //     title: "Kick Push",
    //     artist: "Lupe Fiasco",
    //     albums: ["J", "K", "L"],
    // },
];

// console.log(robsPlaylist.join(", "))



function showTopSongs(songs) {
    let result;

    switch(songs.length){
        case(1):
            result = `The one and only ${songs[0].title} is our best song!`;
            console.log(result);
            break;
        case(2):
            result = `Dynamic Duo with the two songs babayyyy: ${songs[0].title} and ${songs[1].title}.`
            console.log(result)
            break;
        default:
            let titlesOnly = [];
            // let albumsOnly = []
            //iterate through the songs array
            for(let i = 0; i<songs.length; i++){
                let songObj = songs[i]; //each song object is represented by songs[i]
                // console.log(songObj.title)
                titlesOnly.push(songObj.title); //push only the title of each song to the titlesOnly array
                // albumsOnly.push(songObj.albums)
            }
            // console.log(titlesOnly)
            result = `We got a full house! There are ${songs.length} songs to dance to: ${titlesOnly.join(", ")}.`
            console.log(result)
            break;
    }

    return result;



    // //if there is one song in playlist-> "The one and only (songnamegoeshere) is our best song!"
    // if(songs.length === 1){
    //     result = `The one and only ${songs[0].title} is our best song!`
    //     console.log(result)
    // }
    // //if there are two songs-> "Dynamic Duo with the two songs babayyyy: (song1here) and (song2here)."
    // else if(songs.length === 2){
    //     result = `Dynamic Duo with the two songs babayyyy: ${songs[0].title} and ${songs[1].title}.`
    //     console.log(result)
    // }
    // //if there are more than 2 songs-> We got a full house! There are (numberOfSongs goes here) songs to dance to: (each song goes here separated by a comma).
    // else{
    //     //we need to get only the titles of every song into an array so we can do .join(", ") on it
    //     let titlesOnly = [];
    //     // let albumsOnly = []

    //     //iterate through the songs array
    //     for(let i = 0; i<songs.length; i++){
    //         let songObj = songs[i]; //each song object is represented by songs[i]
    //         // console.log(songObj.title)
    //         titlesOnly.push(songObj.title); //push only the title of each song to the titlesOnly array
    //         // albumsOnly.push(songObj.albums)
    //     }
    //     // console.log(titlesOnly)
    //     result = `We got a full house! There are ${songs.length} songs to dance to: ${titlesOnly.join(", ")}.`
    //     console.log(result)
    // }

    // return result;
}


showTopSongs(robsPlaylist)