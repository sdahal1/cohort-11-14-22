//select all the elements with the class name of description-display
let allDescriptions = document.querySelectorAll(".description-display")


// console.log(allDescriptions);


// for(let i = 0; i<allDescriptions.length; i++){
//     let descriptionDiv = allDescriptions[i];
//     // descriptionDiv.innerText = "huh who dis."
// }


allDescriptions.forEach((descriptionDiv)=>{
    // console.log(descriptionDiv.innerText);
    //if the descriptionDiv innertext has more than 250 characters, then trim the inner text to only be 250 characters
    if(descriptionDiv.innerText.length > 250){
        //trim
        let shortenedDescription = descriptionDiv.innerText.slice(0,250)

        //update the descriptionDiv witht he trimmed version
        descriptionDiv.innerHTML = shortenedDescription + '<a href="#">...</a>';
    }
})


//select all the ratings
let ratingsDivs = document.querySelectorAll(".rating-display .value");
// console.log(ratingsDivs);
//loop through the list of ratings
ratingsDivs.forEach((ratingDiv)=>{
    //for each rating in the list, IF the rating is greater than 4.7, then make the rating be larger font size
    // console.log(parseFloat(ratingDiv.innerText))
    if(parseFloat(ratingDiv.innerText) > 4.7){
        //modify the ratingDiv's css 
        // ratingDiv.style.fontSize = "40px";
        // // ratingDiv.style.textDecoration = "underline";
        // ratingDiv.style.backgroundColor = "blue";
        // ratingDiv.style.color = "white";
        // ratingDiv.style.textDecoration = "line-through";

        ratingDiv.classList.add("high-rating")
        ratingDiv.classList.remove("value");
    }
})

/* INSERTING ELEMENTS ON THE PAGE */

function insertNumParksDiv(){
    //select all elements with the classname of park-display
    const parks = document.querySelectorAll(".park-display");
    // console.log(parks.length);
    const numberOfParks = parks.length;
    
    //create an element that is a div
    const newElement = document.createElement("div");
    console.log(newElement)
    
    //give the div some inner text (content)
    newElement.innerText = `There are ${numberOfParks} in this page.`
    newElement.classList.add("header-statement");
    //select where in the dom I want to insert this new div
    let header = document.querySelector("header");
    
    //insert the newElement into the dom;
    header.appendChild(newElement);
}


/* REMOVING ELEMENTS FROM THE PAGE */

//select the element i want to remove a child FROM
let mainElement = document.querySelector("main");

//select the element I want to remove
let firstSection = document.querySelector(".park-display")

mainElement.removeChild(firstSection);

insertNumParksDiv();