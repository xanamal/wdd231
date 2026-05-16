const membersContainer = document.querySelector("#members");
const gridButton = document.querySelector("#grid-view");
const listButton = document.querySelector("#list-view");

async function getMembers() {
    const response = await fetch("data/members.json");
    const members = await response.json();

    displayMembers(members);
}

function displayMembers(members) {
    membersContainer.innerHTML = "";

    members.forEach(member => {
        const card = document.createElement("section");
        card.classList.add("member-card");

        card.innerHTML = `
            <img src="images/${member.image}" alt="${member.name} logo" loading="lazy">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
            <p>${member.description}</p>
            <p><strong>Membership Level:</strong> ${getMembershipLevel(member.membership)}</p>
        `;

        membersContainer.appendChild(card);
    });
}

function getMembershipLevel(level) {
    if (level === 3) {
        return "Gold";
    } else if (level === 2) {
        return "Silver";
    } else {
        return "Member";
    }
}

gridButton.addEventListener("click", () => {
    membersContainer.classList.add("grid");
    membersContainer.classList.remove("list");
});

listButton.addEventListener("click", () => {
    membersContainer.classList.add("list");
    membersContainer.classList.remove("grid");
});

getMembers();