import { places } from "../data/places.mjs";

const showHere = document.querySelector("#places");

async function getPlaces() {
  try {
    const response = await fetch("data/places.json");

    if (!response.ok) {
      throw new Error("Could not load places.json");
    }

    const places = await response.json();

    displayItems(places);
  } catch (error) {
    console.error("Error loading places:", error);
  }
}

function displayItems(places) {
  places.forEach((place) => {
    const thecard = document.createElement("section");
    thecard.classList.add("place-card");

    const thephoto = document.createElement("img");
    thephoto.src = `images/${place.image}`;
    thephoto.alt = place.name;
    thephoto.loading = "lazy";
    thecard.appendChild(thephoto);

    const thetitle = document.createElement("h2");
    thetitle.innerText = place.name;
    thecard.appendChild(thetitle);

    const theaddress = document.createElement("address");
    theaddress.innerText = place.address;
    thecard.appendChild(theaddress);

    const thecost = document.createElement("p");
    thecost.innerText = `Cost: ${place.cost}`;
    thecard.appendChild(thecost);

    const thedesc = document.createElement("p");
    thedesc.innerText = place.description;
    thecard.appendChild(thedesc);

    showHere.appendChild(thecard);
  });
}

displayItems(places);

getPlaces();