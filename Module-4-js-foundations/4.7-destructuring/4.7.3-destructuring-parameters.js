function printAuthorAndTitle({title, author:{firstName,surname}}) {
    // const {title, author:{firstName,surname}} = product
    return `${title} by ${firstName} ${surname}`;
}

const product1 = {
    title: "The Golden Compass",
    priceInCents: 799,
    author: {
        firstName: "Philip",
        surname: "Pullman",
    },
};
console.log(printAuthorAndTitle(product1));



function getFirstAndThirdItems([first,,third]){
    // const [first,,third] = arr
    return `first is ${first}, third is ${third}`
}

function getSecondAndFourthItems([,second,,fourth]){
    // const [first,,third] = arr
    return `second is ${second}, fourth is ${fourth}`
}


console.log(getFirstAndThirdItems(["a", "b", "c", "d"]))
console.log(getFirstAndThirdItems(["rob", "peter", "jen", "maria"]))

console.log(getSecondAndFourthItems(["a", "b", "c", "d"]))