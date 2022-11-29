const fs = require("fs"); //fs is a library that we can use in javascript to access files in our computer

let quote = null; //quote will store a random quote from the quotes.txt file. but for now its null

console.log("Finding a quote...");

const getRandomQuote = new Promise((resolve, reject)=>{

    //you can put async code inside a promise if you want to be able to wait for the async code before running some sync code
    fs.readFile("quotes.txt", (error, buffer) => {
      if (error) {
        // throw error;
        return reject(error);
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
      quote = lines[Math.floor(Math.random() * lines.length)]; //set quote to be a random quote
      resolve(quote)
    });
})

getRandomQuote
    .then((quote)=>{
        console.log(`Your quote is: ${quote}`);    
    })
    .catch((error)=>{
        console.log("Couldn't find quote, here is the error", error)
    })
    


console.log("wazzzaaaa")

