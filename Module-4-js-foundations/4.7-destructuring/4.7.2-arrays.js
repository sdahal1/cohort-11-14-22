const genres = [
    "Fantasy",
    "Fiction",
    "Nonfiction",
    "Science Fiction",
    "Young Adult",
];

// console.log(genres[0]) //fantasy
// console.log(genres[1]) //fiction
// console.log(genres[3]) //sci fi

const [fantasy,fiction,,scifi] = genres

console.log(fantasy, fiction, scifi)