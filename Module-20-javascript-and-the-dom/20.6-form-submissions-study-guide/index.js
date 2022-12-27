/* ~~~~~~~~~~~~~~~~~~~~~~~~ 20.6 form submissions ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
  
  1. Validate the form
      Ensure that the form is not blank. Here, blank means an empty string or a string containing only spaces. If the form is blank, display an error message by creating and appending a new error element to the end of the form. The error element must take the following form:

      <div class="error" id="searchError">Please enter a search term</div>
    If the form is not blank, the error element should not be on the form.


  2. Perform the search
     Perform a case-insensitive search of the titles of the articles (that is, the innerHTML values of the h2 elements). If the search term matches any part of the title, the article should be displayed. If the search term doesn't match any part of the title, the article should be hidden.

     To hide an article, add the class hidden to the article element. To make it visible again, remove the class hidden from the article element.

     If a second search is conducted, articles hidden by any previous searches should be made visible again.
  */

function submitHandler(event){
  event.preventDefault();

  //clear the form of any previous error elements
  let errorDiv = event.target.querySelector("#searchError");
  if(errorDiv) errorDiv.remove();

  //collect form information
  const formData = new FormData(event.target);

  let errors = validateForm(formData);
  
  //if the errors object has keys, then that means there are validation errors
  if(Object.keys(errors).length > 0){
    //create an error element
    let errorElement = document.createElement("div");
    //give the error element a class of error
    errorElement.classList.add("error");
    errorElement.id = "searchError"
    errorElement.innerText = errors.search;

    console.log(errorElement);

    event.target.appendChild(errorElement);
  }else{
    //perform the serch
    let searchTerm = formData.get("searchTerm")

    //check if any section's h1's innerText contains the searchTerm
    let main = document.querySelector("main");

    let mainSections = main.querySelectorAll("section");

    mainSections.forEach(section=>{
      //select the h2 for each section
      let h2 = section.querySelector("h2");
      console.log(h2.innerText);
      if(h2.innerText.toLowerCase().includes(searchTerm.toLowerCase())){
        section.classList.remove("hidden");

      }else{
        section.classList.add("hidden");
      }
    })
  }


}

function validateExists(value) {
  return value && value.trim();
}

function validateForm(formData) {
  const errors = {};

  // Check if name was entered
  if (!validateExists(formData.get("searchTerm"))) {
    errors.search = "Please enter a search term";
  }


  return errors;
}


function main() {
  //add event listener to the form for submit event
  let searchForm = document.querySelector("#searchForm");
  searchForm.addEventListener("submit", submitHandler);
}


window.addEventListener("DOMContentLoaded", main);


