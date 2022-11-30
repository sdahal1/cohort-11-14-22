const { welcome, goodbye, tell } = require("../utils/fortune-teller");


//the value of a function call is whatever that function call returns!

// const promise = welcome();

let myString = "The result is: ";

// welcome()
//     .then((message)=>{
//         myString += message
//         console.log(myString);
//     })
//     .catch((err)=>{

//     })
    


// tell("should i get a pet dog?")
//     .then((fortuneMessage)=>{
//         console.log(fortuneMessage)
//     })
//     .catch((errMessage)=>{
//         console.log(errMessage)
//     })

tell("Should I get a puppy?")
    .then((fortuneMessage)=>{
        console.log(fortuneMessage);
        return "wazzzaa";
    })
    .catch(console.log)
    .then((data)=>{
        console.log("data is: ", data)
    })