const moment = require("moment");

function startApplication(){
    console.log("loading up the mainframe!!! zzzz")
    console.log(`Todays date is ${moment().format("MMMM Do, YYYY")}`)
}


startApplication();