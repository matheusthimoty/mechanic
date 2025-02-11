// Ativa/Desativa o menu hambúrguer
document.getElementById('menuToggle').addEventListener('click', function() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('active');  // Alterna a classe 'active' para mostrar ou esconder o menu
});

// 1. Rolagem suave para âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// 2. Efeito de Fade-In nas seções
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

// 3. Mostrar botão "Voltar ao topo" quando rolar para baixo
const backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

