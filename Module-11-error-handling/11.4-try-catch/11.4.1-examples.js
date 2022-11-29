// try {
//     console.log(
//         "trying some code that might cause errors, might not. Lets see"
//     );
//     throw {
//         msg: "Oops I did it again, i played with your console, i got lost in the stacktrace",
//         error_code: "Item not found",
//     };
// } catch (error) {
//     console.log(
//         `We handled the error: ${error["msg"]}. Error Code is: ${error.error_code}`
//     );
//     const x = 5;
//     console.log(x * 10);
//     console.log(
//         "amazon still running despite the error wha. buy some thangs wha"
//     );
// }

function getRandomNumber() {
    //math.random gives random num from 0-1 but not including 1
    // Math.floor(Math.random() * 100) generates a random number
    const randomNumber = Math.floor(Math.random() * 100);
    const min = 10;
    try {
        if (randomNumber < min) {
            throw `Random number is too small! ${randomNumber} is less than ${min}.`;
        } else {
            console.log(`The random number is: ${randomNumber}`);
        }
    } catch (error) {
        console.log(`An error occurred: ${error}`);
    }
}


getRandomNumber()
