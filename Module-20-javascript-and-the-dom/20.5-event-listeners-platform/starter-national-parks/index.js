/* 
Feature: When I click (event) on a star button, then I want the park section that the button is associated with to change it background color to yellow.

*/


//select a button
let allButtons = document.querySelectorAll("button");

// console.log(allButtons)


allButtons.forEach((btn)=>{
    //add an event listener to the element that needs to listen for an event
    btn.addEventListener("click",(event)=>{
        // console.log("you clicked the button!")
        console.log(event);
        let associatedSection = event.target.parentNode;
        associatedSection.classList.add("favorited-section");
        // associatedSection.style.backgroundColor = "yellow";
        // event.target.style.backgroundColor = "red";
        // event.target.style.border = "2px solid yellow";
        // event.target.style.border = "2px solid yellow";
        // event.target.classList.add('clicked-button');
        // event.target.classList.remove('rate-button');
    })
})



/* 
Feature: when we click on the sort by "name" hyperlink-
    -just have it console.log some message
    -we want to sort the sections on the page alphabetically by the park name
*/

const sortByName = (parkA, parkB)=>{
    let parkAName = parkA.querySelector('h2').innerText;
    let parkBName = parkB.querySelector('h2').innerText;
    return parkAName > parkBName ? -1: 1;
}

const nameSorterClickHandler = (event)=>{
    //prevent the anchor tag click events from reloading the page (that is its default behavior);
    event.preventDefault();
    console.log("you trying to sort huh, ok i see you **denzel voice**")

    //select the main element
    let main = document.querySelector("main");

    //get the list of park sections from main and convert it to an array so we can do .sort()
    let parksList = main.querySelectorAll("section");

    /* could also do this to convert to array all in one line:
        let parksList = [...main.querySelectorAll("section")];
    */
    //convert the parksList which is a NodeList to an array
    let parksArray = Array.from(parksList);
    // 3. Empty the main element to clear out the park sections before putting them back in sorted order
    main.innerHTML = "";
    //select all the section elements that are nested inside of <main>

    // parksArray.sort((parkA, parkB)=>{
    //     let parkAName = parkA.querySelector('h2').innerText;
    //     let parkBName = parkB.querySelector('h2').innerText;
    //     return parkAName > parkBName ? -1: 1;
    // })
    parksArray.sort(sortByName); //refactored to be cleaner

    //insert each section inside parksArray back into the dom
    parksArray.forEach(parkSection=>{
        main.appendChild(parkSection);
    }) 
}

//select the name hyperlink
let nameLink = document.querySelector("#name-sorter");
nameLink.addEventListener("click",nameSorterClickHandler);


//select the rating hyperlink
let ratingLink = document.querySelector("#rating-sorter");

ratingLink.addEventListener("click", (event)=>{
    event.preventDefault();
    // console.log("huh rate who? You? 5.....out of 5 tho haha");

    //get all the sections inside main, but first grab main
    let main = document.querySelector("main");

    //get main's sections
    let parksList =  main.querySelectorAll("section");
    // console.log(parksList);
    let parksArray = Array.from(parksList);

    main.innerHTML = "";

    parksArray.sort((parkA, parkB)=>{
        //select parkA's rating
        let parkARating = parseFloat(parkA.querySelector(".rating-display .value").innerText)
        let parkBRating = parseFloat(parkB.querySelector(".rating-display .value").innerText)

        // return parkARating > parkBRating ? -1 : 1
        if(parkARating > parkBRating){
            return 1;
        }else{
            return -1;
        }
    })

    parksArray.forEach(parksection=>{
        main.appendChild(parksection);
    })
})



