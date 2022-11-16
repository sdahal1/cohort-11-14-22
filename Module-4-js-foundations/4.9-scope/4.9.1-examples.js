//global scope-> variables that are created outside of functions or blocks (conditional statements, loops)
let greatestPlayer = "Lebron James";




function sayHi(){
    console.log(`Hi ${greatestPlayer}! Great day to be the greatest!`)
    let robsfavsongLately = "D4L-Drake"
    let result = "";
    for(let i = 0; i<10; i++){
        result += i;
        if(i === 5){
            let message = "we got the number 5!"
        }
        console.log(message)

    }

}

// console.log(robsfavsongLately)
console.log(sayHi())