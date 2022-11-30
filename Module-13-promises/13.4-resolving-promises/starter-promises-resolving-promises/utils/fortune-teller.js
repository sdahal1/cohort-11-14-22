const responses = require("./responses.json"); //imports the array of responses from responses.json

function selectRandomFortune() {
  const num = Math.random() * responses.length;
  const index = Math.floor(num);
  return responses[index];
}


// console.log(selectRandomFortune())

function welcome() {
  const message = "Provide me a question and I'll give you an answer...";
  return Promise.resolve(message);
}

function goodbye() {
  const message = "Best of luck in the future...";
  return Promise.resolve(message);
}

function tell(question) {
  if (!question) {
    const message = "A question is required...";
    return Promise.reject(message);
  }

  const fortune = selectRandomFortune();
  return Promise.resolve(fortune);
}




module.exports = { welcome, goodbye, tell };
