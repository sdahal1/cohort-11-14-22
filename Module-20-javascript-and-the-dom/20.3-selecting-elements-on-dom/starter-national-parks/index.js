//selects the first h1 it finds on the dom
let h1Elem = document.querySelector("h1");
// console.log(h1Elem)



//select the first h2 on the dom
let firsth2 = document.querySelector("h2")
// console.log(firsth2);


//select all the h2 on the dom
let allh2s = document.querySelectorAll("h2")
// console.log(allh2s);



//select the first section element on the dom
let firstSection = document.querySelector("section");
// console.log(firstSection);


//select the first element that is has the class name of "park-display"
let firstParkDisplay = document.querySelector(".park-display")
// console.log(firstParkDisplay)


//select the first element that is has the class name of "park-display"
let allParkDisplay = document.querySelectorAll(".park-display");


//select all the park established dates
let allParkEstablishedDates = document.querySelectorAll(".established-display .value")
// console.log(allParkEstablishedDates);

//select all park area values
let allParkAreasValues = document.querySelectorAll(".area-display .value")
// console.log(allParkAreasValues)



//select the rating value of the element with the id of "gcnp"
let gcnp = document.querySelector("#gcnp .rating-display .value")
console.log(gcnp)

// allParkEstablishedDates.forEach(element=>{
//     console.log(element.innerText)
// })

// allParkDisplay.forEach((section)=>{
//     section.innerText = "who dis";
// })


// setInterval(()=>{
//     h1Elem.innerText+="a"

// },1000)