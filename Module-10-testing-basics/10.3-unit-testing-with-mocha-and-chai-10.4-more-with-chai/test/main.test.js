//expect allows us to compare our actual data with expected data
const expect = require("chai").expect;
//import the functions you want to test
const {
    getAverageRating,
    getLowRatedArtists,
    findArtistRatingByName,
    findArtistByName,
    partitionArtistsByRating,
    assignGrade
} = require("../src/main");

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

// // [
// //     [
// //         { name: "Taylor Swift", rating: 9 },
// //         { name: "Drake", rating: 9.8 },
// //         { name: "J Cole", rating: 8 },
// //         { name: "Kendrick Lamar", rating: 8.5 },
// //         { name: "Beatles", rating: 10 },
// //     ],
// //     [
// //         { name: "Rob", rating: 6.25 },
// //         {
// //             name: "Random guy from beach who asked me to follow his sound cloud",
// //             rating: 5,
// //         }
// //     ]
// // ]

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Start Mocha chai exmaples ~~~~~~~~~~~~~~~~ */


// describe("getAverageRating", () => {
//     //each case for the function I want to test goes here

//     //is getAverageRating even a function?
//     it("getAverageRating should be a function", () => {
//         //compare getAverageRating to check if it is a function
//         expect(getAverageRating).to.be.a("function");
//     });
//     //does it return the average rating?
//     it("should return the correct average number ", () => {
//         //we expect it to give 8.07 with our current dataset
//         const actualResult = getAverageRating(artists);

//         expect(actualResult).to.equal(8.08);
//     });
//     //if the artists array is empty, does it return null?
//     it("if the artists array is empty, it should return null", () => {
//         const actualResult = getAverageRating([]);

//         expect(actualResult).to.equal(null);
//     });
//     //if no input is given, does it return null?
//     it("if no input is given, it should return null", () => {
//         const actualResult = getAverageRating();
//         expect(actualResult).to.equal(null);
//     });
// });

// describe("getLowRatedArtists", () => {
//     /* 
//     should return this array: [
//         { name: "Rob", rating: 6.25 },
//         {
//             name: "Random guy from beach who asked me to follow his sound cloud",
//             rating: 5,
//         },
//     ]
    
//     */

//     it("should return an array of artist objects who have rating lower than a given rating", () => {
//         const expectedResult = [
//             { name: "Rob", rating: 6.25 },
//             {
//                 name: "Random guy from beach who asked me to follow his sound cloud",
//                 rating: 5,
//             },
//         ];

//         const actualResult = getLowRatedArtists(artists, 7);

//         expect(actualResult).to.eql(expectedResult);
//     });
// });

// describe("findArtistRatingByName", () => {
//     //it should return the correct rating for the given artist as a number
//     it("it should return the correct rating for the given artist as a number", () => {
//         //collect the output of the
//         const actualResult = findArtistRatingByName(artists, "Rob");
//         const expectedResult = 6.25;
//         expect(actualResult).to.equal(expectedResult);
//     });
//     //should return null if the artist is not found in given array
//     it("should return null if the artist is not found in given array", () => {
//         const actualResult = findArtistRatingByName(artists, "Jennifer");
//         const expectedResult = null;
//         expect(actualResult).to.equal(expectedResult);
//     });
//     //should return null given array is empty
//     it("should return null given array is empty", () => {
//         const actualResult = findArtistRatingByName([], "Jennifer");
//         const expectedResult = null;
//         expect(actualResult).to.be.null;
//     });
//     //should return null if no array is given
//     it("should return null if no array is given", () => {
//         const actualResult = findArtistRatingByName("Jennifer");
//         const expectedResult = null;
//         expect(actualResult).to.be.null;
//     });
// });

// describe("findArtistByName", () => {
//     // Test for: A correct artist name is given (i.e. the full object is returned)
//     it("A correct artist name is given (i.e. the full object is returned", () => {
//         //get the actual result
//         const actualResult = findArtistByName(artists, "Drake");
//         //compare it with the expected result
//         // const expectedResult = { name: "Drake", rating: 9.8 };
//         const expectedResult = artists[1];

//         expect(actualResult).to.eql(expectedResult);
//     });
//     // Test for: An incorrect artist name is given (i.e. null is returned)-> use to.be.null example
// });

// describe("partitionArtistsByRating", () => {
//     //should split artists by rating and return the array with the two sub arrays
//     it("should split artists by rating and return the array with the two sub arrays", () => {
//         const actualResult = partitionArtistsByRating(artists, 7.5);

//         const expectedResult = [
//             [
//                 { name: "Taylor Swift", rating: 9 },
//                 { name: "Drake", rating: 9.8 },
//                 { name: "J Cole", rating: 8 },
//                 { name: "Kendrick Lamar", rating: 8.5 },
//                 { name: "Beatles", rating: 10 },
//             ],
//             [
//                 { name: "Rob", rating: 6.25 },
//                 {
//                     name: "Random guy from beach who asked me to follow his sound cloud",
//                     rating: 5,
//                 },
//             ],
//         ];
//         expect(actualResult).to.eql(expectedResult);
//     });
//     //should put all artists in one bucket (sub array) if necessary
//     it("should put all artists in one bucket (sub array) if necessary", () => {
//         const actualResult = partitionArtistsByRating(artists, 1);

//         const expectedResult = [
//             [
//                 { name: "Taylor Swift", rating: 9 },
//                 { name: "Drake", rating: 9.8 },
//                 { name: "J Cole", rating: 8 },
//                 { name: "Rob", rating: 6.25 },
//                 { name: "Kendrick Lamar", rating: 8.5 },
//                 { name: "Beatles", rating: 10 },
//                 {
//                     name: "Random guy from beach who asked me to follow his sound cloud",
//                     rating: 5,
//                 },
//             ],
//             [],
//         ];
//         expect(actualResult).to.eql(expectedResult);
//     });
//     //should return an empty array with two empty sub arrays if the artists input array is empty or not provided
//     it("should return an empty array with two empty sub arrays if the artists input array is empty or not provided", () => {
//         const actualResult = partitionArtistsByRating(1);

//         const expectedResult = [
//             [],
//             [],
//         ];
//         expect(actualResult).to.eql(expectedResult);
//     });
// });


// describe("assignGrade", ()=>{
//     it("should return the correct grade given a score", ()=>{
//         const actualResult1 = assignGrade(0.5);
//         const expectedResult1 = "F";

//         const actualResult2 = assignGrade(0.92);
//         const expectedResult2 = "A";

//         const actualResult3 = assignGrade(0.85);
//         const expectedResult3 = "B";

//         const actualResult4 = assignGrade(0.71);
//         const expectedResult4 = "C";

//         expect(actualResult1).to.equal(expectedResult1);
//         expect(actualResult2).to.equal(expectedResult2);
//         expect(actualResult3).to.equal(expectedResult3);
//         expect(actualResult4).to.equal(expectedResult4);

//     })
// })

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~END Mocha chai exmaples ~~~~~~~~~~~~~~~~ */

/* ~~~~~~~~~~~~~~~~~~~~~ JEST EXAMPLES BELOW ~~~~~~~~~~~~~~~~~~~~~~~~~ */


describe("getAverageRating", () => {
    //each case for the function I want to test goes here

    //is getAverageRating even a function?
    it("getAverageRating should be a function", () => {
        //compare getAverageRating to check if it is a function
        expect(typeof getAverageRating).toBe("function");
    });
    //does it return the average rating?
    it("should return the correct average number ", () => {
        //we expect it to give 8.07 with our current dataset
        const actualResult = getAverageRating(artists);

        expect(actualResult).toEqual(8.08);
    });
    //if the artists array is empty, does it return null?
    it("if the artists array is empty, it should return null", () => {
        const actualResult = getAverageRating([]);

        expect(actualResult).toEqual(null);
    });
    //if no input is given, does it return null?
    it("if no input is given, it should return null", () => {
        const actualResult = getAverageRating();
        expect(actualResult).toEqual(null);
    });
});

describe("getLowRatedArtists", () => {
    /* 
    should return this array: [
        { name: "Rob", rating: 6.25 },
        {
            name: "Random guy from beach who asked me to follow his sound cloud",
            rating: 5,
        },
    ]
    
    */

    it("should return an array of artist objects who have rating lower than a given rating", () => {
        const expectedResult = [
            { name: "Rob", rating: 6.25 },
            {
                name: "Random guy from beach who asked me to follow his sound cloud",
                rating: 5,
            },
        ];

        const actualResult = getLowRatedArtists(artists, 7);

        expect(actualResult).toEqual(expectedResult);
    });
});

describe("findArtistRatingByName", () => {
    //it should return the correct rating for the given artist as a number
    it("it should return the correct rating for the given artist as a number", () => {
        //collect the output of the
        const actualResult = findArtistRatingByName(artists, "Rob");
        const expectedResult = 6.25;
        expect(actualResult).toEqual(expectedResult);
    });
    //should return null if the artist is not found in given array
    it("should return null if the artist is not found in given array", () => {
        const actualResult = findArtistRatingByName(artists, "Jennifer");
        const expectedResult = null;
        expect(actualResult).toEqual(expectedResult);
    });
    //should return null given array is empty
    it("should return null given array is empty", () => {
        const actualResult = findArtistRatingByName([], "Jennifer");
        const expectedResult = null;
        expect(actualResult).toBe(null);
    });
    //should return null if no array is given
    it("should return null if no array is given", () => {
        const actualResult = findArtistRatingByName("Jennifer");
        const expectedResult = null;
        expect(actualResult).toBe(null);
    });
});

describe("findArtistByName", () => {
    // Test for: A correct artist name is given (i.e. the full object is returned)
    it("A correct artist name is given (i.e. the full object is returned", () => {
        //get the actual result
        const actualResult = findArtistByName(artists, "Drake");
        //compare it with the expected result
        // const expectedResult = { name: "Drake", rating: 9.8 };
        const expectedResult = artists[1];

        expect(actualResult).toEqual(expectedResult);
    });
    // Test for: An incorrect artist name is given (i.e. null is returned)-> use to.be.null example
});

describe("partitionArtistsByRating", () => {
    //should split artists by rating and return the array with the two sub arrays
    it("should split artists by rating and return the array with the two sub arrays", () => {
        const actualResult = partitionArtistsByRating(artists, 7.5);

        const expectedResult = [
            [
                { name: "Taylor Swift", rating: 9 },
                { name: "Drake", rating: 9.8 },
                { name: "J Cole", rating: 8 },
                { name: "Kendrick Lamar", rating: 8.5 },
                { name: "Beatles", rating: 10 },
            ],
            [
                { name: "Rob", rating: 6.25 },
                {
                    name: "Random guy from beach who asked me to follow his sound cloud",
                    rating: 5,
                },
            ],
        ];
        expect(actualResult).toEqual(expectedResult);

        //expect the actual result to be the datatype of "array"
        expect(Array.isArray(actualResult)).toEqual(true)
    });
    //should put all artists in one bucket (sub array) if necessary
    it("should put all artists in one bucket (sub array) if necessary", () => {
        const actualResult = partitionArtistsByRating(artists, 1);

        const expectedResult = [
            [
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
            ],
            [],
        ];
        expect(actualResult).toEqual(expectedResult);
    });
    //should return an empty array with two empty sub arrays if the artists input array is empty or not provided
    it("should return an empty array with two empty sub arrays if the artists input array is empty or not provided", () => {
        const actualResult = partitionArtistsByRating(1);

        const expectedResult = [
            [],
            [],
        ];
        expect(actualResult).toEqual(expectedResult);
    });
});


describe("assignGrade", ()=>{
    it("should return the correct grade given a score", ()=>{
        const actualResult1 = assignGrade(0.5);
        const expectedResult1 = "F";

        const actualResult2 = assignGrade(0.92);
        const expectedResult2 = "A";

        const actualResult3 = assignGrade(0.85);
        const expectedResult3 = "B";

        const actualResult4 = assignGrade(0.71);
        const expectedResult4 = "C";

        expect(actualResult1).toEqual(expectedResult1);
        expect(actualResult2).toEqual(expectedResult2);
        expect(actualResult3).toEqual(expectedResult3);
        expect(actualResult4).toEqual(expectedResult4);

    })
})
