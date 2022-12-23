const submitHandler = (event) => {
    //prevent the form submission from reloading the page
    event.preventDefault();
    console.log("The form was submitted");

    /* One way to collect the form input - the long way */
    //grab (select) the inputs we want to collect information from
    // let parkNameInput = document.querySelector("#name-input");
    // let locationInput = document.querySelector("#location-input");
    // let descriptionInput = document.querySelector("#description-input");
    // let establishedInput = document.querySelector("#established-input");
    // let areaInput = document.querySelector("#area-input");
    // let ratingInput = document.querySelector("#rating-input");


    // console.log(parkNameInput.value);
    // console.log(locationInput.value);
    // console.log(descriptionInput.value);
    // console.log(establishedInput.value);
    // console.log(areaInput.value);
    // console.log(ratingInput.value);


    /* Better way to collect form input */

    //select the whole form
    // let formElement = document.querySelector("#park-form");
    let formElement = event.target;

    //get all the form data inside of one variable
    const formData = new FormData(formElement)

    //validate the form inputs
    //if any of the inputs are blank, log an error message saying "inputs are required!"
    let errorsObj = validateForm(formData);
    //if parkname is less than 2 characters, log an error message
    console.log(errorsObj);
    
    //errors object will have 0 keys if the from is filled out properly according to our validateForm function
    console.log(Object.keys(errorsObj))

    if(Object.keys(errorsObj).length>0){
        Object.keys(errorsObj).forEach((key) => {
            // Find the specific error element
            const errorElement = document.querySelector(`#${key}-error`); //#description-error
            errorElement.innerHTML = errorsObj[key];
            errorElement.style.display = "block";
          });
    }else{
        //if theres no errors create a park using the form info

        //create a section
        let newParkSection = document.createElement("section");

        newParkSection.classList.add("park-display");

        newParkSection.innerHTML = `<section class="park-display">
        <h2>${formData.get("name")}</h2>
        <div class="location-display">${formData.get("location")}</div>
        <div class="description-display">${formData.get("description")}</div>
        <button class="rate-button" title="Add to Favourites">&#9734;</button>
        <div class="stats">
          <div class="established-display stat">
            <h3>Established</h3>
            <div class="value">${moment(formData.get("established")).format("MMMM D, YYYY")}</div>
          </div>
          <div class="area-display stat">
            <h3>Area</h3>
            <div class="value">${formData.get("area")}</div>
          </div>
          <div class="rating-display stat">
            <h3>Rating</h3>
            <div class="value">${formData.get("rating")}</div>
          </div>
        </div>
      </section>`

      //insert the section on the page at the main element
        let main = document.querySelector("main")
        main.appendChild(newParkSection);

    }
    

};

function validateExists(value) {
    // if(value !== undefined && value.trim() !== undefined){
    //     return true;
    // }else{
    //     return false;
    // }
    return value && value.trim();
}

function validateNumber(value) {
    return !isNaN(value);
}
  
function validateRange(value, min, max) {
    return value >= min && value <= max;
}

function validateForm(formData) {
    const errors = {};
  
    // Check if name was entered
    if (!validateExists(formData.get("name"))) {
      errors.name = "Please enter a name";
    }
  
    // Check if rating was entered
    if (!validateExists(formData.get("rating"))) {
      errors.rating = "Please enter a rating";
    }else if(!validateNumber(formData.get("rating"))){
        errors.rating = "Rating must be a number!"
    }else if(!validateRange(formData.get("rating"), 1, 5)){
        errors.rating = "Rating must be between 1-5"
    }
    // Check if description was entered
    if (!validateExists(formData.get("description"))) {
      errors.description = "Please enter short description";
    }
  
    // Check if established date was entered
    if (!validateExists(formData.get("established"))) {
      errors.established = "Please enter date";
    }
  
    // Check if area was entered
    if (!validateExists(formData.get("area"))) {
      errors.area = "Please enter the area of the park";
    }
  
    // Check if location date was entered
    if (!validateExists(formData.get("location"))) {
      errors.location = "Please enter the location of the park";
    }
  
    return errors;
}


const main = () => {
    // Get the form element
    const form = document.querySelector("#park-form");
    // Attach the submit handler
    form.addEventListener("submit", submitHandler);
};



window.addEventListener("DOMContentLoaded", (event) => {
    main();
});


