const spotlightContainer = document.querySelector("#spotlights");

async function getSpotlights() {
    const response = await fetch("data/members.json");
    const members = await response.json();

    const qualifiedMembers = members.filter(member =>
        member.membership === 2 || member.membership === 3
    );

    const randomMembers = qualifiedMembers
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

    displaySpotlights(randomMembers);
}

function displaySpotlights(members) {
    spotlightContainer.innerHTML = "";

    members.forEach(member => {
        const card = document.createElement("section");

        card.classList.add("spotlight-card");

        card.innerHTML = `
            <h3>${member.name}</h3>
            <img src="images/${member.image}" alt="${member.name} logo">
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <p>${member.description}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
        `;

        spotlightContainer.appendChild(card);
    });
}

getSpotlights();