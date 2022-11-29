const locations = {};

function createSecretLocation(lat, lon, passcode) {
  if (!lat || !lon || !passcode) {
    throw "latitude, longitude, and passcode are required!";
  }

  try {
    locations[lat][lon] = passcode;
  } catch (error) {
    // console.log("error is this", error)
    locations[lat] = {};
    locations[lat][lon] = passcode;
  }
}



createSecretLocation(40.35, -105.81, "ROCKY-MOUNTAINS");


// console.log(locations["latitude"]["longitude"])

let person = {
    name: {
        first: "Rob",
        last: "Dahal"
    }
}


person.name.first