const maps = [
  {
    name: "Bank",
    image: "images/bank/bank_cover.webp",
    description: "A ranked map with strong vertical play, important stair control, and several key callout areas."
  },
  {
    name: "Border",
    image: "images/Border/border_cover.webp",
    description: "A fast-paced ranked map with strong entry points and important bomb site control."
  },
  {
    name: "Chalet",
    image: "images/chalet/chalet_cover.webp",
    description: "A balanced ranked map with key areas like garage, wine cellar, master, and library."
  },
  {
    name: "Clubhouse",
    image: "images/clubhouse/club_cover.webp",
    description: "A classic ranked map with important control around CCTV, Cash, Church, and Arsenal."
  }
];

const randomMap = maps[Math.floor(Math.random() * maps.length)];

const randomMapContainer = document.querySelector("#random-map");

randomMapContainer.innerHTML = `
  <img src="${randomMap.image}" alt="${randomMap.name} map preview">
  <h3>${randomMap.name}</h3>
  <p>${randomMap.description}</p>
  <a href="maps.html" class="card-button">View Map</a>
`;