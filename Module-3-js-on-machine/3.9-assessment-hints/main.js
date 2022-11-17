const faker = require('faker');


function teamGenerator(){
    return {
        teamName: faker.lorem.word(),
        city: faker.address.city(),
        state: faker.address.state(),
        starPlayerName: faker.name.firstName(),
        jerseyColor: faker.commerce.color()
    }
    
}

console.log(teamGenerator())