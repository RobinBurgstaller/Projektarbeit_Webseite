const selectors = {
  nav: ".nav",
  open: ".nav-open",
  close: ".nav-close",
};

const states = {
  opened: "nav--opened",
};

let nav = document.querySelector(selectors.nav);
let navOpen = document.querySelector(selectors.open);
let navClose = document.querySelector(selectors.close);

navOpen.addEventListener("click", toggleNav);

navClose.addEventListener("click", toggleNav);

function toggleNav() {
  nav.classList.toggle(states.opened);
}
