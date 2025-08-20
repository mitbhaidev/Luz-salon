
  // Mobile menu toggle (optional if you add a burger later)
  // Highlight current nav link by pathname
  (function() {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(a => {
      if (a.href && a.href.replace(/\/+$/, '') === location.href.replace(/\/+$/, '')) {
        a.classList.add('active');
      }
    });
  })();

const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const hamburger = document.getElementById("hamburger");
const closeIcon = document.getElementById("close-icon");

menuBtn.addEventListener("click", () => {
  if (mobileMenu.classList.contains("hidden")) {
    // Open Menu
    mobileMenu.classList.remove("hidden");
    setTimeout(() => mobileMenu.classList.remove("translate-y-full"), 10);

    hamburger.classList.add("hidden");
    closeIcon.classList.remove("hidden");
  } else {
    // Close Menu
    mobileMenu.classList.add("translate-y-full");
    hamburger.classList.remove("hidden");
    closeIcon.classList.add("hidden");
    setTimeout(() => mobileMenu.classList.add("hidden"), 500);
  }
});