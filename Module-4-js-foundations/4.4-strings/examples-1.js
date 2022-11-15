let famousQuote = "it IS Not The MOUNTAINS Ahead tHat wiLL wear you oUt, Its the pebble in yOuR sHoE.";
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


const famousBook = "seven habits of highly effective people"


console.log(famousBook.substr(0,1).toUpperCase() + famousBook.substr(1).toLowerCase())