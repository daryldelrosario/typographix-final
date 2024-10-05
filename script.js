document.addEventListener('DOMContentLoaded', () => {
  // FUNCTION to create and observe Intersection Observers
  function createObserver(selector, observerOptions, toggleClass) {
    const items = document.querySelectorAll(selector);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          entry.target.classList.add(toggleClass);
        } else {
          entry.target.classList.remove(toggleClass);
        }
      })
    }, observerOptions);

    items.forEach((item) => {
      observer.observe(item);
    });
  }

  // CREATE OBSERVERS for different section
  createObserver('#about .phrase', { root: null, threshold: 1}, 'active');
})

// NAVIGATION MENU ======================
const nav = document.getElementById("nav");
const menuIcon = document.querySelector(".menu-icon");

function toggleMenu() {
  nav.classList.toggle("active");
  menuIcon.classList.toggle("active");
}

function hideMenu() {
  nav.classList.remove("active");
  menuIcon.classList.remove("active");
}