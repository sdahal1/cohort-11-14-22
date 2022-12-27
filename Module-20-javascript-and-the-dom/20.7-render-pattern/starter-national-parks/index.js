const renderOnePark = (park) => {
  // Get the individual properties of the park
  const { name, location, description, established, area, rating } = park;

  const content = `
      <section class="park-display">
        <h2>${name}</h2>
        <div class="location-display">${location}</div>
        <div class="description-display">${description}</div>
        <button class="rate-button" title="Add to Favourites">&#9734;</button>
        <div class="stats">
          <div class="established-display stat">
            <h3>Established</h3>
            <div class="value">${established}</div>
          </div>
          <div class="area-display stat">
            <h3>Area</h3>
            <div class="value">${area}</div>
          </div>
          <div class="rating-display stat">
            <h3>Rating</h3>
            <div class="value">${rating}</div>
          </div>
        </div>
      </section>
  `;

  // const content = `<h1>${name}</h1>`
  return content;
};

const render = () => {
  // Get the parent element
  const main = document.querySelector("main");

  // Empty the parent element
  main.innerHTML = "";

  // Get the parks HTML
  // const content = parks.map(renderOnePark).join("");

  let contentArray = parks.map((parkObj)=>{
    return renderOnePark(parkObj)
  })

  let content = contentArray.join("");
  // console.log(content)
  
  // Set the `innerHTML` of parent element
  main.innerHTML = content;
};



const submitHandler = (event) => {
  event.preventDefault();

  const form = document.querySelector("#park-form");
  const formData = new FormData(form);
  // Keep track of if any errors are found
  let hasErrors = false;

  formData.forEach((value, key) => {
    let errorId = `#${key}-error`;
    if (value.trim() === "") {
      document.querySelector(errorId).style.display = "block";
      hasErrors = true;
    } else {
      document.querySelector(errorId).style.display = "none";
    }
  });

  // if there are no errors
  if (!hasErrors) {
    const park = {
      name: formData.get("name"),
      location: formData.get("location"),
      description: formData.get("description"),
      established: formData.get("established"),
      area: formData.get("area"),
      rating: formData.get("rating"),
    };

    parks.push(park);

    render();
  }
};

// function to handler favorite button clicks
const favoriteButtonClickHandler = (event) => {
  console.log(event.target);
  if (event.target && event.target.nodeName == "BUTTON") {
    const park = event.target.parentNode;
    park.style.backgroundColor = "#c8e6c9";
  }
};

// function for sorting by name
const sortByName = (parkA, parkB) => {
  const parkAName = parkA.name;
  const parkBName = parkB.name;
  if (parkAName < parkBName) {
    return -1;
  } else if (parkAName > parkBName) {
    return 1;
  } else {
    return 0;
  }
};

// function for sorting by rating
const sortByRating = (parkA, parkB) => {
  const parkARating = parkA.rating;
  const parkBRating = parkB.rating;
  return parkBRating - parkARating;
};

// function for handling the nameSorter click
const nameSorterClickHandler = (event) => {
  event.preventDefault();


  //sort the array
  parks.sort(sortByName);

  render();

};

// function to handle the ratingSorter click
const ratingSorterClickHandler = (event) => {
  event.preventDefault();

 

  // 5. sort the array
  parks.sort(sortByRating);
  // parks.sort((parkA, parkB)=>{
  //   return parkB.rating - parkA.rating;
  // })

  render();
};

// the point where all the code starts
const main = () => {
  // select the nameSorter link
  const nameSorter = document.querySelector("#name-sorter");

  // add an event listener
  nameSorter.addEventListener("click", nameSorterClickHandler);

  // select the ratingSorter link
  const ratingSorter = document.querySelector("#rating-sorter");

  // add an event listener
  ratingSorter.addEventListener("click", ratingSorterClickHandler);

  // // select all the buttons for all the parks
  // const allBtns = document.querySelectorAll(".rate-button");

  // // iterate the list of buttons and add an event handler to each
  // allBtns.forEach((btn) => {
  //   btn.addEventListener("click", favoriteButtonClickHandler);
  // });

  // Select all the buttons for all the parks
  const main = document.querySelector("main");

  // Add event handler to the main
  main.addEventListener("click", favoriteButtonClickHandler);

  // get the form element
  const form = document.querySelector("#park-form");

  // attach the submit handler
  form.addEventListener("submit", submitHandler);


  render();

};

// Add event listener for DOMContentLoaded
window.addEventListener("DOMContentLoaded", main);
