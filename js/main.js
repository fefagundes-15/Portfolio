//#region Scroll Reveal

ScrollReveal().reveal('.reveal', {
  duration: 300, // duração da animação em milissegundos
  // distance: '20px',  // distância que o elemento se desloca
  origin: 'bottom',  // ponto de origem da animação
  easing: 'ease-in-out', // curva de aceleração
  interval: 100, // intervalo entre cada elemento
  reset: false // não redefinir para oculto após revelar
});

//#endregion Scroll Reveal

// Current year
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

//#region Button to go back to top of the page

window.addEventListener("scroll", function () {
  const scrollY = window.scrollY || window.pageYOffset;
  const backToTop = this.document.getElementById("backToTop");

  if (scrollY === 0) {
    backToTop.classList.add("btnBackToTop-hide");
  } else {
    backToTop.classList.remove("btnBackToTop-hide");
  }
});

//#endregion Button to go back to top of the page

//#region Header height
const header = document.querySelector(".header");
const root = document.documentElement;
const navLinks = document.querySelectorAll(".header__nav ul a");

function setHeaderHeight() {
  const height = header.offsetHeight;
  root.style.setProperty("--header-height", `${height}px`);
}

// Start
setHeaderHeight();

// Rezise
window.addEventListener("resize", setHeaderHeight);

//#endregion Header height

//#region Button Read more & line-clamp in CSS
const readMoreBtns = document.querySelectorAll('.read-more-btn');

readMoreBtns.forEach((btn) => {
  const description = btn.previousElementSibling;
  const fullHeight = description.scrollHeight;

  // Set the clamp temporarily to calculate limited height
  description.style.display = '-webkit-box';
  description.style.webkitLineClamp = '3';

  const limitedHeight = description.getBoundingClientRect().height;

  // Hide button if the content isn't overflowing
  if (fullHeight <= limitedHeight + 1) {
    btn.style.display = 'none';
  }

  btn.addEventListener('click', function (event) {
    event.preventDefault();

    const isExpanded = description.style.webkitLineClamp === 'initial';
    description.style.webkitLineClamp = isExpanded ? '3' : 'initial';
    this.textContent = isExpanded ? 'Read more' : 'Read less';
  });
});
//#endregion Button Read more & line-clamp in CSS

//#region Progress Bar

const progressBar = document.getElementById('progress-bar');

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progressWidth = (scrollTop / docHeight) * 100;

  progressBar.style.width = progressWidth + '%';
});

//#endregion Progress Bar


// navLinks.forEach((link) => {
//   link.addEventListener("click", () => {
//     menuToggle.checked = false;
//   });
// });