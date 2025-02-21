// 1. Menu Sticky
window.addEventListener("scroll", function() {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// 2. Smooth scrolling for anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// 3. Fade-In effect for sections
const fadeInElements = document.querySelectorAll('.fade-in');

function checkVisibility() {
  fadeInElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', checkVisibility);
checkVisibility();

// 4. Show "Back to top" button when scrolling down
const backToTopButton = document.getElementById("back-to-top");

if (backToTopButton) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      backToTopButton.classList.add("show");
    } else {
      backToTopButton.classList.remove("show");
    }
  });
}


// 5. "Back to top" function
if (backToTopButton) {
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}


// 6. Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

if (menuToggle && menu) {
  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuToggle.textContent = menu.classList.contains('active') ? '✕' : '☰';
  });
}


// Close menu when clicking outside
if (menu && menuToggle) {
  document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
      menu.classList.remove('active');
      menuToggle.textContent = '☰';
    }
  });
}


// Close menu when clicking on a link
if (menu && menuToggle) {
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('active');
      menuToggle.textContent = '☰';
    });
  });
}
