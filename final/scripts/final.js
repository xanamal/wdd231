document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("#navigation");

menuButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  menuButton.classList.toggle("open");
});

const courseList = document.querySelector("#courseList");
const totalCredits = document.querySelector("#totalCredits");

const allButton = document.querySelector("#all");
const cseButton = document.querySelector("#cse");
const wddButton = document.querySelector("#wdd");

function displayCourses(courseArray) {
  courseList.innerHTML = "";

  courseArray.forEach((course) => {
    const courseCard = document.createElement("section");

    courseCard.classList.add("course-card");

    if (course.completed) {
      courseCard.classList.add("completed");
    }

    courseCard.innerHTML = `
      <h3>${course.subject} ${course.number}</h3>
      <p>${course.title}</p>
      <p>${course.credits} credits</p>
    `;

    courseList.appendChild(courseCard);
  });

  const credits = courseArray.reduce((total, course) => total + course.credits, 0);
  totalCredits.textContent = credits;
}

allButton.addEventListener("click", () => {
  displayCourses(courses);
});

cseButton.addEventListener("click", () => {
  const cseCourses = courses.filter((course) => course.subject === "CSE");
  displayCourses(cseCourses);
});

wddButton.addEventListener("click", () => {
  const wddCourses = courses.filter((course) => course.subject === "WDD");
  displayCourses(wddCourses);
});

displayCourses(courses);


