/* 
3 ways to declare variables:
var-> discouraged. Try not to use this. use let and const from now on.
        Var can potentially overwrite a javascript native variable


let-> when you declare a variable that can be re-assigned a value
const -> when you want a variable that cannot be re-aassigned a value



*/




const foods = ['sushi', 'lentil soup', 'smoothie']
const statement = {info:"we are inside iteration number -1"}

for(let i = 0; i< 5; i++){
   statement.info = `We are in iteration number ${i}`
   console.log(statement)
}





// const numDaysInWeek = 7;



// numDaysInWeek += 1
/* 
numDaysInWeek = numDaysInWeek + 1

*/


/* 

const using objects and arrays-> you can change their value, you just can't re assign the variable

*/


const topArtists = [
    {name: "Drake", rating: 10}, //0
    {name: "Taylor Swift", rating: 10}, //1
    {name: "J Cole", rating: 8}, //2
    {name: "Kendrick Lamar", rating: 9}, //3
    {name: "Beatles", rating: 10} //4
]

//this is allowed
topArtists.push({name: "Michael Jackson", rating: 10})
topArtists.pop()
topArtists[2].rating = 10

console.log(topArtists)

//this is not allowed b/c you're reassigning it using the = sign
// topArtists = [
//     {name: "Drake", rating: 10}, //0
//     {name: "Taylor Swift", rating: 10}, //1
//     {name: "J Cole", rating: 9}, //2
//     {name: "Kendrick Lamar", rating: 9}, //3
//     {name: "Beatles", rating: 10}, //4,
//     {name: "Michael Jackson", rating: 10}
// ]



const monthInfo = {name: "November", holiday: "Thanksgiving", numDays : 30}

monthInfo.name = "No shave November"

console.log(monthInfo)