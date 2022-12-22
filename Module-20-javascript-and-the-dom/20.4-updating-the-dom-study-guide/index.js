/* 
1. addHeadingsAndImages-> make all <article>Puppy 1</article> look like 
        <article>
            <h3>Puppy 1</h3>
            <img src = "linkgoeshere">
        </article>
2. styleKittensandPuppies-> style all cats and dogs by adding the classlist "kitten" or "puppy" to the article containing either a kitten or a puppy
    eg: <article><h3>Puppy</h3></article> will look like <article class="puppy"><h3>Puppy 1</h3></article> and <article class="kitten"><h3>Kitten 1</h3></article>
3. separateCatsFromDogs
    -create a "kittens" section with the class of "kittens" to put kitten articles into
    -if the article has a kitten, remove it from that section and add it to a new section for kittens
*/



let images = [
    "https://media.tenor.com/BlHLysXBit4AAAAC/puppy-love-hi.gif",
    "https://media.tenor.com/PTBNHIGHS-kAAAAd/dog-smile.gif",
    "https://media.tenor.com/bK1qpWGyQKkAAAAM/kitty.gif",
    "https://media.tenor.com/avkEJ6QsXLcAAAAM/puppy.gif",
    "https://media.tenor.com/XybizgnL1zQAAAAM/kittens-cute.gif",
    "https://media.tenor.com/gZHJZ3gNDYwAAAAM/cute-cat.gif",
    "https://media.tenor.com/JMv_beVhW98AAAAM/perrete.gif",
    "https://media.tenor.com/g9bkJfFtovMAAAAM/dog.gif",
    "https://media.tenor.com/kKvpaWwGoPcAAAAM/stretch-kitty.gif",
    "https://media.tenor.com/WT7snNMnZoMAAAAM/luv-you-cute-kitten.gif"
];

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~solutions~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function addHeadingsAndImages(){
    //select all article elements
    let articleElements = document.querySelectorAll("article");
    console.log(articleElements)
    articleElements.forEach((articleElem,idx)=>{
        //create an h3 element
        const h3Elem = document.createElement("h3");
        //create an image element
        const imgElem = document.createElement("img");

        //get the current articleElem's inner text and set the h3elem's innertext to be that
        h3Elem.innerText = articleElem.innerText
        
        //clear the article element's inner text first
        articleElem.innerText = "";
        //append the h3 into the article as a child
        articleElem.appendChild(h3Elem);

        //update the imageElem's src property to equal an image
        imgElem.src = images[idx];
        articleElem.appendChild(imgElem);
    })
}

function styleKittensandPuppies(){
    let articleElements = document.querySelectorAll("article");

    articleElements.forEach((articleElem)=>{
        // if(articleElem.innerText.toLowerCase().includes("puppy")){
        //     articleElem.classList.add("puppy");
        // }else{
        //     articleElem.classList.add("kitten");
        // }


        articleElem.innerText.toLowerCase().includes("puppy")
            ? articleElem.classList.add("puppy")
            : articleElem.classList.add("kitten")
    })
}


function separateCatsFromDogs(){
    //create a section for kittens to be in
    let newSection = document.createElement("section");

    newSection.classList.add("kittens");

    //get the row element to append the section into
    let rowDiv = document.querySelector(".row");

    //insert the section into the row
    rowDiv.appendChild(newSection);

    //get all the articles
    let allArticles = document.querySelectorAll("article");

    //select the puppies section so we can reference it later to remove kittens from
    let puppiesSection = document.querySelector(".puppies");
    //for each article, 
    allArticles.forEach((currentArticle)=>{
        //check if it contains the class of "kitten" in its class list
        if(currentArticle.classList.contains("kitten")){
            //if its a kitten, remove it from the puppies section and insert it into the kittens section
            puppiesSection.removeChild(currentArticle)

            //insert the currentArticle to the kittens section
            newSection.appendChild(currentArticle)
        }

    })


}


// addHeadingsAndImages();
// styleKittensandPuppies();
// separateCatsFromDogs();


