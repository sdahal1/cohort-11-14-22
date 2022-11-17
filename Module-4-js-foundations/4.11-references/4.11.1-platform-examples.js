/* 
Primitive data types: numbers, strings, booleans (true/false), null, undefined (think you and your twin)

Reference data types: arrays, objects (think you and the mirror)
*/


let title = "Mort";

const anotherTitle = title; //this makes a SEPARATE copy (another piece of data in memory) that contains the same data as "title"

title = "Mortyyy" //update title

// console.log(title, anotherTitle)




const book = { title: "Think and grow rich", author: "Napoleon Hill" };

//trying to create a copy of book into another variable book2....but this way doesn't make a SEPARATE copy...this is because book is an object. Objects and arrays are reference data types. Book2 is just points to the same memory location as book is
const book2 = book;

book.title = "7  habits"

console.log(book.title, book2.title)

const bookCopy = {...book}

bookCopy.title = "Red fish blue fish"
console.log(book.title, bookCopy.title)



const people = ["a", "b", "c"];

const anotherGroupOfPeople = people; //this does not create a copy, this just references the people arrray


anotherGroupOfPeople.push("d") //if i push to anotherGroupOfPeople, its also affecting the people variable b/c they are referencing the same array

console.log(people)
console.log(anotherGroupOfPeople)


//to make an actual shallow copy of people we can use the spread operator (...)
let peopleCopy = [...people];

peopleCopy.push("Steph")
console.log('people is this', people)
console.log('peoplecopy is this', peopleCopy)




