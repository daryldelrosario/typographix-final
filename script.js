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
  createObserver('#about .phrase', { root: null, threshold: 1 }, 'active');
  createObserver('#gallery .image-box', { root: null, threshold: 0.3 }, 'active');
  createObserver('#blog .featured-article, #blog .article', { root: null, threshold: 0.2 }, 'fadeInUp');
  createObserver('#contact > div', { root: null, threshold: 0.5 }, 'fadeInUp');
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

// FORM SUBMISSION ======================
document.getElementById('myForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const form = this;
  const formData = new FormData(form);

  fetch(form.action, {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if(response.ok) {
      form.reset();
      const toast = document.getElementById('toast');
      toast.classList.add('show');
      setTimeout(() => {
        toast.classList.remove('show'); 
      }, 10000);
    } else {
      // HANDLE ERRORS HERE
      alert("FORM SUBMISSION FAILED!");
    }
  })
  .catch(error => {
    console.error('Error', error);
  });
});