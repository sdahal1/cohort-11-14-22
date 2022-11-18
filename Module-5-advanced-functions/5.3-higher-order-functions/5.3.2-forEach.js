/*
1. 


Given an array of Food items, print each item using forEach
["Calamari", "Sweet Potato Fries", "Green Smoothie", "Fried Chicken", "Cookies", "Broccoli"]

*/

let foodItems = ["Calamari", "Sweet Potato Fries", "Green Smoothie", "Fried Chicken", "Cookies", "Broccoli"];
//                 0                1                   2               3               4           5



// for(let i = 0; i<foodItems.length; i++){
//     console.log(foodItems[i])
// }

// for(let item of foodItems){
//     console.log(item);
// }

// function printElement(element,index){
//     console.log(`Found ${element} at index number ${index}`);
// }

// const saySomething = (element,index)=>{
//     console.log(`Found ${element} at index number ${index}`);
// }


// foodItems.forEach(saySomething)
// foodItems.forEach((element,index)=>{
//     console.log(`Found ${element} at index number ${index}`);
// })




/*

2. use foreach() to loop through an array of objects and show their details- first just the name, then a whole description
[
  {
    name: "Drake",
    fireLevel: "10",
    moneyEarnedFromRapping: 10000000
  },
  {
    name: "Lupe Fiasco",
    fireLevel: "10",
    moneyEarnedFromRapping: 5000000
  },
  {
    name: "Rob D",
    fireLevel: "7",
    moneyEarnedFromRapping: -50
  }
];

*/


let randomRappers = [
    {
      name: "Drake",
      fireLevel: "10",
      moneyEarnedFromRapping: 10000000
    },
    {
      name: "Lupe Fiasco",
      fireLevel: "10",
      moneyEarnedFromRapping: 5000000
    },
    {
      name: "Rob D",
      fireLevel: "7",
      moneyEarnedFromRapping: -50
    }
]



function showRapperDetails(artistList){
    artistList.forEach((rapperObj, index)=>{
        // console.log(rapperObj)
        const {name, moneyEarnedFromRapping, fireLevel} = rapperObj;
    
        console.log(`${name} has earned this much money from rapping: ${moneyEarnedFromRapping}. This rapper's fire level is: ${fireLevel}`)
      
    })
}

// showRapperDetails(randomRappers)



/*
3. use forEach to add up the fireLevels of the artists above and give back the totalfire and averageFire
*/

function calculateTotalFire(artistList){
    let totalFire = 0;
    
    randomRappers.forEach((rapperObj,index)=>{
        totalFire += parseInt(rapperObj.fireLevel);
    })
    console.log('Total fire is this:', totalFire)
    return totalFire;
}

// calculateTotalFire(randomRappers);


function findAverageFireLevel(artistList){
    let total = calculateTotalFire(artistList)

    return total/artistList.length
}

// console.log(findAverageFireLevel(randomRappers))







/*

4. use forEach to build a statement from given data above "My top rappers list are: Drake, Lupe Fiasco, Rob D, and they are all fuego.

5. use forEach to log the moneyEarnedFromRapping for each artist above and format using the dollar sign to show amount in dollars

*/


function showMoneyEarnedFormatted(artistList){
    let result = "";
    randomRappers.forEach((rapperObj, idx)=>{
        let amount = `The rapper ${rapperObj.name} earned $${rapperObj.moneyEarnedFromRapping.toFixed(2)}\n`
        result += amount
    })

    return result;

}

// console.log(showMoneyEarnedFormatted(randomRappers))






