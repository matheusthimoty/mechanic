// 1. Menu Sticky
window.addEventListener("scroll", function() {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// 2. Rolagem suave para âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// 3. Efeito de Fade-In nas seções
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
checkVisibility(); // Verifica a visibilidade na carga da página

// 4. Galeria com setas
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const galleryContainer = document.querySelector('.gallery-container');

let currentIndex = 0;

function updateGallery() {
  const images = galleryContainer.children;
  const totalImages = images.length;

  // Move as imagens da galeria para exibir a próxima ou anterior
  const offset = -currentIndex * 100;
  galleryContainer.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = galleryContainer.children.length - 1;
  }
  updateGallery();
});

nextButton.addEventListener('click', () => {
  if (currentIndex < galleryContainer.children.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateGallery();
});

// 5. Mostrar botão "Voltar ao topo" quando rolar para baixo
const backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
});

// 6. Função de "Voltar ao Topo"
backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
