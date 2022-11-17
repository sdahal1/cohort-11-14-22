function calculatePriceInDollars(priceInCents=0) {
    return priceInCents / 100;
}

console.log(calculatePriceInDollars(100)); //> 1  (Returns 1 because 100 cents = 1 dollar)
console.log(calculatePriceInDollars(250)); //> 2.5
console.log(calculatePriceInDollars());
