export default function menuHamburger(hamburger, panel, section) {
  const d = document;
  document.addEventListener("click", (e) => {
    if (
      e.target.matches(hamburger) ||
      e.target.matches(`${hamburger} *`) ||
      e.target.matches(section)
    ) {      
      d.querySelector(hamburger).classList.toggle("is-active");
      d.querySelector(panel).classList.toggle("is-active");
    }
  });

  


}



