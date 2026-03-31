const menuToggle = document.getElementById("menu-toggle");
const headerNav = document.querySelector(".header__nav");
const hamburgerLabel = document.querySelector(".hamburger-menu");
const menuLinks = headerNav.querySelectorAll("a");

// Detecta se o usuário está usando teclado
let usingKeyboard = false;
document.body.addEventListener("keydown", (e) => {
  if (e.key === "Tab") {
    usingKeyboard = true;
    document.body.classList.add("keyboard-navigation");
  }
});

document.body.addEventListener("mousedown", () => {
  usingKeyboard = false;
  document.body.classList.remove("keyboard-navigation");
});

// Abre/fecha menu com Enter ou Space no hamburger
hamburgerLabel.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    menuToggle.checked = !menuToggle.checked;
  }
});

// Abre menu se algum item receber foco via teclado
headerNav.querySelectorAll("a, input, button").forEach((item) => {
  item.addEventListener("focus", () => {
    if (usingKeyboard) {
      menuToggle.checked = true;
    }
  });
});

// Fecha menu se tab ou shift+tab sair do menu
headerNav.addEventListener("focusout", (e) => {
  setTimeout(() => {
    if (!headerNav.contains(document.activeElement)) {
      menuToggle.checked = false;
    }
  }, 0);
});

// Fecha menu quando clica em um link
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.checked = false;
  });
});

// Buttons
const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(dropdown => {
  const trigger = dropdown.querySelector(".header__nav__language, .header__nav__mode");
  const options = dropdown.querySelector(".dropdown__options");

  if (trigger && options) {
    trigger.addEventListener("click", (e) => {
      e.stopPropagation(); // impede que o clique feche imediatamente

      // Fecha todos os outros dropdowns antes de abrir o atual
      dropdowns.forEach(d => {
        if (d !== dropdown) {
          d.querySelector(".dropdown__options").style.display = "none";
          d.classList.remove("show");
        }
      });

      // Alterna o estado do dropdown atual
      const isVisible = options.style.display === "block" || options.style.display === "revert";
      if (isVisible) {
        options.style.display = "none";
        dropdown.classList.remove("show");
      } else {
        options.style.display = "revert"; // usa revert, volta ao display natural
        dropdown.classList.add("show");
      }
    });
  }
});

// Fecha dropdowns se clicar fora
document.addEventListener("click", () => {
  dropdowns.forEach(dropdown => {
    const options = dropdown.querySelector(".dropdown__options");
    options.style.display = "none";
    dropdown.classList.remove("show");
  });
});
