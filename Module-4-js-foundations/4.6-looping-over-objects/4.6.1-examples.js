/* For loops- use it when you know how many iterations you'll need */
// for (let i=0; i<=10; i++) {
//     console.log(`iteration ${i}`);
// }

//log all even numbers starting at 2 until 50
// for(let i = 1; i<=50; i++){
//   //modulo operator (%)
//   //if the remainder we get when we divide the number by 2 is 0, thne its even number so log it
//   if(i%2===0){
//     console.log(i)
//   }
// }









/* for-of loops-> use it when you want to iterate over an array fully */
let nums = [23,24,3,8,77,6];

// for(let i = 0; i<nums.length; i++){
//   // console.log("index numbers are i->", i);
//   // console.log("elements at the index numbers are->", nums[i])
//   if(nums[i] === 8){
//     nums[i] = "Kobe"
//   }
// }


// for(let num of nums){
//   console.log(num)
//   if(num === 8){
//     num = "Kobe"
//   }
// }
// console.log(nums)

let teams = [
    {
      name: "Lakers",
      city: "Los Angeles",
      players: ["Lebron James", "Kobe Bryant", "Magic Johnson"],
      championships: 20
    },
    {
      name: "Warriors",
      city: "San Franscisco",
      players: ["Steph Curry", "Klay Thompson", "Baron Davis"],
      championships: 5
    },
    {
      name: "Knicks",
      city: "New York",
      players: ["Carmelo Antony", "Jeremy Lin"],
      championships: 3
  
    },
    {
      name: "Nets",
      city: "New York",
      players: ["Vince Carter", "Kevin Durant"],
      championships: 0
    }
]

// for(let teamObj of teams){
//   console.log(teamObj.name)
// }




/* for-in loops-> use it to loop over the keys of objects */
const people = {
    'Lee-Finch': { address: "913 Hunts Lane", isCustomer: true },
    rob: {address: "100 keep it 100 way", isCustomer: true},
    "Whitney Shawna": { address: "392 Norfolk Street", isCustomer: false },
    "Gabrielle Mayo": { address: "934 Engert Avenue", isCustomer: false },
};

for(let key in people){
  console.log(key);
  //the values can be accessed using the key on the object name with square bracket notation like such:
  console.log(people[key])
  // console.log(`The person ${key} lives in ${people[key].address}`)
}

// people["Lee-Finch"]
// people["rob"]
// people["whitney Shawna"]





/* Transforming objects into arrays using Object.values() or Object.keys() */

//get all the keys from an object into an array
let allPeopleNames = Object.keys(people)
let values = Object.values(people)
// console.log(allPeopleNames)
// console.log(values)

for(let element of allPeopleNames){
  console.log(element)
}


