function identifyPlant(plant) {
    console.log("running function identify plant");
    return `This is a ${plant.name} plant! It is ${plant.age} years old.`;
}


let plant = { name: "Coleus", age: 2 };


console.log(identifyPlant(plant));
