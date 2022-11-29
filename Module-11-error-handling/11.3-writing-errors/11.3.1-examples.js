// let secret = 42;
// let guess = 55;

// if (guess !== secret) {
//   throw new Error("invalid guess")
// }

function one() {
    console.log("im on one!")
    two();
    console.log("line 11")
}

function two() {
    console.log("numberrr two, get the sharks with the laser beams")
    three();
}

function three() {
    console.log("Three just make me think of Iverson crossing up Jordan")
    throw new Error("Here's the error");
    console.log("this line is after the throw error line");
}


// one();

function checkSecretPassword(password) {
    if (!password) throw "No password given!";

    return password === "SECRET";
}


console.log(checkSecretPassword("Wazzap"))