/* 
1. 13.2 major key - Sync code and async code-> js will run sync code first then async code afterwards. 



console.log(1);

setTimeout(() => {
  console.log(2);
}, 0);

setTimeout(() => {
  console.log(3);
}, 0);

console.log(4);





2. 13.4 -> 
*/

const fs = require("fs"); //fs is a library that we can use in javascript to access files in our computer
let quote = null;



const quoteTicket = new Promise((resolve, reject)=>{

    fs.readFile("quotes.txt", (error, buffer) => {
        // console.log("2");

        // console.log({error:error,buffer:buffer.toString()})
        if (error) {
            // throw error;
            // console.log("error happened", error)
            return reject("error happened")
        }
        //buffer represents the contents of the quotes.txt file
        const lines = buffer.toString().split("\n"); //convert the contents to a string and split that content at every new line
        /* 
        lines looks like this: 
        [
        "On a long enough timeline, every line of code is obsolete. - Unknown",
        "Deliver yesterday, code today, think tomorrow. - Unknown",
        "A clever person solves a problem. A wise person avoids it. - Albert Einstein",
        "There's no time to stop for gas, we're already late. - Karin Donke,""
        ]
        
        */
        let randomIndex = Math.floor(Math.random() * lines.length)
        quote = lines[randomIndex]; //set quote to be a random quote
        resolve(quote);
    });

});




// quoteTicket
//     .then((resolvedValue)=>{
//         console.log(`Random quote is: ${resolvedValue}`);
//     })
//     .catch((rejectedValue)=>{
//         console.log("Rejected value is: ", rejectedValue)
//     })



const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Completed!');
    }, 100);
});





