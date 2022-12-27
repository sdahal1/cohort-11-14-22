/* ~~~~~~~~~~~~~~~~~~~~~~~~ 20.5 Event Listeners ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

function expandArticleBody() {
    //target all the view stats buttons
    let allExpandButtons = document.querySelectorAll(".expand_button");
    //for each button, add an event listener for a click event
    allExpandButtons.forEach(expandBtn=>{
        expandBtn.addEventListener("click", (event)=>{
            let associatedSection = event.target.parentNode.parentNode.parentNode;
            let statsDiv = associatedSection.querySelector(".stats")
            //if the statsDiv contains the class hidden, then remove the hidden class
            if(statsDiv.classList.contains("hidden")){
                statsDiv.classList.remove("hidden");
                expandBtn.innerText = "Hide Stats";
            }else{
                //otherswise give the div a hidden class to re-hide it
                statsDiv.classList.add("hidden");
                expandBtn.innerText = "View Stats";
            }
        })
    })
}

function crossOffArticle() {
    let allVisitedButtons = document.querySelectorAll(".toggle-visited");

    console.log("allvisitedbuttons is this-->", allVisitedButtons)
    allVisitedButtons.forEach(visitedBtn=>{
        visitedBtn.addEventListener("click", (event)=>{
            let associatedSection = event.target.parentNode.parentNode.parentNode;
            if(associatedSection.classList.contains("cross-off")){
                associatedSection.classList.remove("cross-off");
                visitedBtn.innerText = "Mark Visited"
            }else{
                associatedSection.classList.add("cross-off")
                visitedBtn.innerText = "Unmark"
            }
        })
    })

}


  
function main() {
    expandArticleBody();
    crossOffArticle();
}

window.addEventListener("DOMContentLoaded", main);
  