/* Platform code */

const title = "Infernal Devices";
const author = "K.W. Jeter";

// let bookObj = {title: title, author: author}
let bookObj = {title, author}


// console.log(bookObj)

const product = {bookObj, priceInCents: 1950}
const salesTax = { state: "Washington", tax: 0.065 };
// console.log(product);

let saleInfo = {...product, ...salesTax, priceInCents: product.priceInCents * (1 + salesTax.tax), isPopular: true}

console.log("saleinfo is this", saleInfo)


const ownedBooks = ["Infernal Devices", "Foundation", "Think and Grow Rich", "7 habits of highly effective people"];

const wishlist = ["Good Omens", "Guards! Guards!"];

const [firstBook,, ...allOtherBooks] = ownedBooks

// console.log(firstBook, secondBook)
// console.log(allOtherBooks)

//this merges the two arrays ownedbooks and wishlist
let allBooks = [...ownedBooks, ...wishlist];

console.log(allBooks)


