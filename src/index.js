import styles from "./styles.css";
import weather_app from "../src/images/weather-app.jpg";
import weather_app_phone from "../src/images/weather-app-ph.jpg";
import todo_app from "../src/images/todo-app.jpg";
import todo_app_phone from "../src/images/todo-app-ph.jpg";
import battleship_app from "../src/images/battleship.jpg";
import battleship_app_phone from "../src/images/battleship-ph.jpg";
import restaurant_app from "../src/images/restaurant.jpg";
import restaurant_app_phone from "../src/images/restaurant-ph.jpg";
import cvbuilder from "../src/images/cvBuilder.jpg";
import cvbuilder_phone from "../src/images/cvBuilder-ph.jpg";
import herosMemoCard from "../src/images/herosMemoCards.jpg";
import herosMemoCard_phone from "../src/images/herosMemoCards-ph.jpg";

console.log("Assalam Alaikom");

const sections = document.querySelectorAll(".content section");
const about = document.querySelector("a[href='#about']");
const projects = document.querySelector("a[href='#projects']");
const contact = document.querySelector("a[href='#contact']");

const herosMemoCard_image = document.querySelector(
  '.project[name="heros-memo-cards"] img'
);

const weather_app_image = document.querySelector(
  '.project[name="weather-app"] img'
);
const cvbuilder_image = document.querySelector(
  '.project[name="cvBuilder"] img'
);

const todo_app_image = document.querySelector('.project[name="todo"] img');
const battleship_app_image = document.querySelector(
  '.project[name="battleship"] img'
);
const restaurant_page_app_image = document.querySelector(
  '.project[name="restaurant-page"] img'
);

let freshUl = document.createElement("ul");
freshUl.innerHTML = `
<li class="about-li"></li>
<li class="projects-li"></li>
<li class="contact-li"></li>
`;
const navLinks = [about, projects, contact];

function highlightActiveLink() {
  const scrollPosition = window.scrollY + 50;
  const atBottom =
    window.innerHeight + scrollPosition >= document.body.offsetHeight;
  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (
      (scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight) ||
      (atBottom && index == sections.length - 1)
    ) {
      navLinks.forEach((link) => link.classList.remove("active-a"));
      navLinks[index].classList.add("active-a");
    }
  });
}

function displayAtBreakPoint() {
  if (window.innerWidth <= 870) {
    if (document.querySelector("header nav ul"))
      document.querySelector("header nav ul").remove();
    document.querySelector("section#about .title").appendChild(about);
    document.querySelector("section#projects .title").appendChild(projects);
    document.querySelector("section#contact .title").appendChild(contact);
  } else {
    document.querySelector("header nav").append(freshUl);
    document.querySelector("li.about-li").append(about);
    document.querySelector("li.projects-li").append(projects);
    document.querySelector("li.contact-li").append(contact);
  }
  if (window.innerWidth <= 480) {
    cvbuilder_image.src = cvbuilder_phone;
    todo_app_image.src = todo_app_phone;
    weather_app_image.src = weather_app_phone;
    battleship_app_image.src = battleship_app_phone;
    restaurant_page_app_image.src = restaurant_app_phone;
    herosMemoCard_image.src = herosMemoCard_phone;
  } else {
    cvbuilder_image.src = cvbuilder;
    todo_app_image.src = todo_app;
    weather_app_image.src = weather_app;
    battleship_app_image.src = battleship_app;
    restaurant_page_app_image.src = restaurant_app;
    herosMemoCard_image.src = herosMemoCard;
  }
}
displayAtBreakPoint();
window.addEventListener("scroll", highlightActiveLink);
window.addEventListener("resize", displayAtBreakPoint);
