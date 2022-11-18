//closure is a function that returns a function



//callback is a function that is given as an argument to another function
function saySomething(firstName, lastName, callback){
    let fullName =  callback(firstName, lastName);

    return `Welcome to BookFace ${fullName}`
}


function formatFirstAndLastName(firstName,lastName){
    return `${firstName} ${lastName}`
}

function formatNameProfessional(firstName, lastName){
    return `${lastName}, ${firstName}` //Phan, Peter
}


console.log(saySomething("Peter", "Phan", formatFirstAndLastName));
console.log(saySomething("Peter", "Phan", formatNameProfessional));

