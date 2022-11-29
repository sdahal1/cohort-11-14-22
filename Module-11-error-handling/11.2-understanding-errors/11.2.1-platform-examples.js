const fs = require('fs'); //import filesystem library

fs.writeFile("./wazzap.js", "Hello world",(err,data)=>{
    console.log("wazzaaa")
});


const content = fs.readFileSync("idontexist.txt")
// const doesNotExist = require('./wazzap');
