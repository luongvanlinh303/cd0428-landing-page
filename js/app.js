/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

let sectionNav = document.querySelectorAll("section");
let NavTag = document.getElementById("navbar_header");
let sectionNavLength = sectionNav.length;
let sectionNavPositions = [];
let prePosition = 0;
let currentPosition = 0;

/**
 * End Global Variables
 *
 */

function scrollToSection(sectionID) {
  window.scrollTo(0, sectionID);
}

// build the nav bar
sectionNav.forEach((element, index) => {
  let sectionName = element.getAttribute("data-nav");
  let toOffSection = element.offsetTop + 30;
  let liTag = document.createElement("li");
  liTag.setAttribute("class", "menu_link" + index);
  liTag.innerHTML = `<a onClick="scrollToSection(${toOffSection})">${sectionName}</a>`;
  NavTag.appendChild(liTag);
});

document.addEventListener("scroll", () => {
  currentPosition = this.scrollY;
  // Section Positions
  sectionNavPositions = [];
  sectionNav.forEach((element) =>
    sectionNavPositions.push(element.getBoundingClientRect().top + 50)
  );

  // Adding and removing active sections
  let addIndex = sectionNavPositions.findIndex((element) => element > 0);
  for (let i = 0; i < sectionNavLength; i++) {
    if (addIndex === i) {
      document.querySelector(".menu_link" + addIndex).classList.add("active");
      document
        .querySelector(`#section${addIndex + 1}`)
        .classList.add("current-active-class");
    } else {
      document.querySelector(".menu_link" + i).classList.remove("active");
      document.querySelector(`#section${i + 1}`).removeAttribute("class");
    }
  }
});
