import "./style.css";
import { tns } from "tiny-slider";

// Navbar
const navItems = document.querySelector(".nav-items");
const btn = document.querySelector(".burger");

btn.addEventListener("click", () => {
  if (navItems.classList.contains("hide")) navItems.classList.remove("hide");
  else navItems.classList.add("hide");
});

const items = navItems.children;
const pathname = window.location.pathname.split("/")[1];

for (let i = 0; i < items.length; i++) {
  const a = i === 0 ? items[0].children[1] : items[i].children[0];
  const isEqual =
    i === 0 && pathname === ""
      ? true
      : pathname.includes(a.getAttribute("href"));
  if (isEqual) {
    if (!a.classList.contains("active")) a.classList.add("active");
  } else a.classList.remove("active");
}

// Sliders
const clientsSlider = tns({
  container: ".mySlider",
  items: 3,
  slideBy: "page",
  autoplay: true,
  loop: false,
  rewind: true,
  mouseDrag: true,
  autoplayButtonOutput: false,
  nav: false,
  lazyload: true,
  controlsContainer: ".controlsContainer",
  prevButton: ".prevBtn",
  nextButton: ".nextBtn",
  responsive: {
    300: {
      items: 2,
      controls: true,
      edgePadding: 30,
    },
    568: {
      items: 3,
    },
    768: {
      items: 4,
    },
    1024: {
      items: 5,
    },
  },
});

const projectsSlider = tns({
  container: ".projectsSlider",
  items: 6,
  // gutter: 10,
  mouseDrag: true,
  swipeAngle: false,
  slideBy: "page",
  autoplay: true,
  loop: false,
  rewind: true,
  autoplayButtonOutput: false,
  nav: false,
  lazyload: true,
  controlsContainer: ".controlsContainerProjects",
  prevButton: ".prevBtnProjects",
  nextButton: ".nextBtnProjects",
  responsive: {
    300: {
      items: 1.3,
    },
    468: {
      items: 2.3,
    },
    640: {
      items: 3.3,
    },
    968: {
      items: 4.3,
    },
    1280: {
      items: 5.3,
    },
  },
});
