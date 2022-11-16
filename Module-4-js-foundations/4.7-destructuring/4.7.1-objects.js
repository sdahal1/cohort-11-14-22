/* Platform code */

const product = {
    title: "The Golden Compass",
    priceInCents: 799,
    author: {
        firstName: "Philip",
        surname: "Pullman",
    },
};


const product2 = {
    title: "iPhone",
    priceInCents: 900,
    author: {
        firstName: "Steve",
        surname: "Jobbs",
    },
};


function printAuthorAndTitle(product) {
    // const title = product.title;
    // const firstName = product.author.firstName;
    // const surname = product.author.surname;
    const {title, author, author:{firstName,surname}} = product; //destructuring the title and author properties from product object
    // console.log(title)
    // console.log('firstName is this', firstName)
    // console.log('author is this', author)

    return `${title} by ${firstName} ${surname}`;
}

//THE VALUE OF A FUNCTION CALL IS WHATEVER THAT FUNCTION CALL RETURNS

//DRY= DONT REPEAT YOURSELF
console.log(printAuthorAndTitle(product2));