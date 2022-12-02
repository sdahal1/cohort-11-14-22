const books = require("./books.json");

function getRandomBook() {
  const num = Math.random() * books.length;
  const index = Math.floor(num);
  return books[index];
}

function enterLibrary() {
  const message = "Welcome to the place of wisdom. All you need is within you but here are some books to supplement your journey";
  return Promise.resolve(message);
}

function leaveLibrary() {
  const message = "Great job on reading today, you gona .catch() that first job .then() celebrate";
  return Promise.resolve(message);
}

function checkOutBook(libraryCard) {
  if (!libraryCard) {
    const message = "You need to get a library card....otherwise system said 'who this'";
    return Promise.reject(message);
  }

  const recommendedBook = getRandomBook();
  return Promise.resolve(recommendedBook);
}

module.exports = { enterLibrary, leaveLibrary, checkOutBook };
