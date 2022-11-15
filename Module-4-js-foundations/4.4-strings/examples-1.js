let famousQuote =
    "it IS Not The MOUNTAINS Ahead tHat wiLL wear you oUt, Its the pebble in yOuR sHoE.";
//                 01234.....

// console.log(famousQuote[3]);

// for(let i = 0; i<famousQuote.length; i++){
//     console.log(famousQuote[i])
// }

// console.log(famousQuote.substr(1))

/* 
Strings are immutable-> cannot update existing characters, but you can add to the end of a string
*/

// famousQuote = ` Muhammad Ali said: ${famousQuote}`
// console.log(famousQuote)

function sentenceCase(sentence) {
    const firstCharacter = sentence[0]; //firstCharacter = "i"
    let result = firstCharacter.toUpperCase(); //result = "I"

    for (let i = 1; i < sentence.length; i++) {
        const character = sentence[i];
        result += character.toLowerCase(); //result += t
    }

    return result;
}

// console.log(sentenceCase(famousQuote))

const famousBook = "seven habits of highly effective people";

// console.log(famousBook.substr(0,1).toUpperCase() + famousBook.substr(1).toLowerCase())
// famousBook.substring()

function titleize(title) {
    const words = title.split(" ");
    // console.log(words) //its an array of words from the sentence
    let result = [];

    for (let i = 0; i < words.length; i++) {
        console.log(words[i]);
        const capitalized = sentenceCase(words[i]); //The
        result.push(capitalized);
    }
    // console.log(result)

    return result.join("");
}

console.log(titleize("the light FANTASTIC")); //> "The Light Fantastic"


let firstName = "Greatest"
let lastName = "Ever"
let slogan = "Boy I ain't nothing to play with"



//The famous poet Drake once said "First name Greatest, last name Ever, like a sprained ankle, boy I ain't nothing to play with"

let result = `The famous poet Drake once said: \n "First name ${firstName}, last name ${lastName}, like a sprained ankle, ${slogan}"`

console.log(result)