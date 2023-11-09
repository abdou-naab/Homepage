import styles from "./styles.css";
console.log("Assalam Alaikom");

const navLinks = document.querySelectorAll("header nav a");
const sections = document.querySelectorAll(".content section");

function highlightActiveLink() {
  const scrollPosition = window.scrollY + 5;
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
window.addEventListener("scroll", highlightActiveLink);
