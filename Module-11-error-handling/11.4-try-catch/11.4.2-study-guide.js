//Object

function getRandomQuote(person) {
    try{
        let randomIndex = Math.floor(Math.random()* person.quotes.length)
        return person.quotes[randomIndex];
    }catch(error){
        console.log("error is this", error)
        return "Person has no quotes";
    }
}

const person1 = {
    name: "Michael Scott",
    quotes: [
        "An office is not for dying. An office is a place for living life to the fullest, to the max, to… an office is a place where dreams come true.",
        "Sometimes I'll start a sentence, and I don't even know where it's going. I just hope I find it along the way.",
        "Do I have a special someone? Well, yeah, of course. A bunch of 'em. My employees.",
        "I love inside jokes. I hope to be a part of one someday.",
        "I'm an early bird and I'm a night owl so I'm wise and I have worms.",
    ],
    company: "Dunder Mifflin"
};


const person2 = {
    name: "Dwight Schrute",
    quotes: null,
    company: "Dunder Mifflin"
}


console.log(getRandomQuote(person2))