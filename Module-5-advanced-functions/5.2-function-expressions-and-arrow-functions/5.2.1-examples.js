

// Function declaration
// function ratingAsText(park) {
//     console.log("This is a function declaration.");
//     return park.rating > 4 ? "Excellent!" : "Good";
// }




// Function expression
// const ratingAsText = function ratingAsText(park) {
//     console.log("This is a function declaration.");
//     return park.rating > 4 ? "Excellent!" : "Good";
// }




// Anonymous function expression
// const ratingAsText = function (park) {
//     console.log("This is a function declaration.");
//     return park.rating > 4 ? "Excellent!" : "Good";
// }



// Arrow function expression
// const ratingAsText = (park) => {
//     console.log("This is a function declaration.");
//     return park.rating > 4 ? "Excellent!" : "Good";
// }




// Arrow function with implicit return (only when you have one line of code in the function body and that line is a return statement)
// const ratingAsText = (park) => park.rating > 4 ? "Excellent!" : "Good";


// console.log(ratingAsText({rating: 5, name: "La Jolla Park"}));


// Arrow function when you have only one parameter shortcut
// const ratingAsText = park =>  park.rating > 4 ? "Excellent!" : "Good";



// Arrow function with no parameters
const greet = () =>  {
    console.log("saying some greeting")
    return "hello world"
}


// Arrow function with more than 1 parameter
const greetSomeone = (firstName, lastName) =>  {
    console.log("saying some greeting")
    return `hello ${firstName} ${lastName}`
}


console.log(greetSomeone("Jen", "Watkins"))

