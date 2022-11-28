//expect allows us to compare our actual data with expected data
const expect = require("chai").expect;
//import the functions you want to test
const {getAverageRating, artists, getLowRatedArtists} = require("../src/main");


describe("getAverageRating", ()=>{
    //each case for the function I want to test goes here


    //is getAverageRating even a function?
    it("getAverageRating should be a function",()=>{
        //compare getAverageRating to check if it is a function
        expect(getAverageRating).to.be.a("function");

    })
    //does it return the average rating?
    it("should return the correct average number ",()=>{
        //we expect it to give 8.07 with our current dataset
        const actualResult = getAverageRating(artists)

        expect(actualResult).to.equal(8.08);
    })
    //if the artists array is empty, does it return null?
    it("if the artists array is empty, it should return null",()=>{
        const actualResult = getAverageRating([])

        expect(actualResult).to.equal(null);
    })
    //if no input is given, does it return null?
    it("if no input is given, it should return null", ()=>{
        const actualResult = getAverageRating();
        expect(actualResult).to.equal(null);
    })
})



describe("getLowRatedArtists", ()=>{
    /* 
    should return this array: [
        { name: "Rob", rating: 6.25 },
        {
            name: "Random guy from beach who asked me to follow his sound cloud",
            rating: 5,
        },
    ]
    
    */

    it("should return an array of artist objects who have rating lower than a given rating", ()=>{
        const expectedResult =  [
            { name: "Rob", rating: 6.25 },
            {
                name: "Random guy from beach who asked me to follow his sound cloud",
                rating: 5,
            },
        ]

        const actualResult  = getLowRatedArtists(artists,7);

        expect(actualResult).to.eql(expectedResult);

    })
})
