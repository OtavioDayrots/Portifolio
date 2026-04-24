// Menu rotativo
const sections = ["home", "sobre", "projetos", "eventos"];
let currentIndex = 0;
let isScrolling = false;

const areas = document.querySelectorAll(".area");

// Rotação da tela
window.addEventListener("wheel", (e) => {
  if (isScrolling) return;

  isScrolling = true;

  if (e.deltaY > 0) currentIndex++;
  else currentIndex--;

  currentIndex = Math.max(0, Math.min(sections.length - 1, currentIndex));

  updateUI();

  setTimeout(() => {
    isScrolling = false;
  }, 700);
});

// Atualiza a interface
function updateUI() {
  const angle = currentIndex * 90;

  document.querySelector(".rotator").style.transform =
    `rotate(-${angle}deg)`;

  document.querySelector(".wheel").style.transform =
    `translate(-50%, -50%) rotate(-${angle}deg)`;

  document.querySelector(".areas").style.transform =
    `rotate(-${angle}deg)`;

  document.querySelector(".labels").style.transform =
    `rotate(-${angle}deg)`;

  const gradients = [
    "linear-gradient(135deg, #0f0f0f, #242430)", // Home
    "linear-gradient(135deg, #0d1b2a, #232d41)", // Sobre
    "linear-gradient(135deg, #1b063d, #4d3663)", // Projetos
    "linear-gradient(135deg, #3c119b, #302e46)"  // Eventos
  ];

  document.querySelector("main").style.background =
    gradients[currentIndex];

  updateMenu();
}

// Atualiza o menu
function updateMenu() {
  areas.forEach((area, index) => {
    area.classList.toggle("active", index === currentIndex);
  });
}

// clique no SVG
areas.forEach(area => {
  area.addEventListener("click", () => {
    currentIndex = parseInt(area.dataset.index);
    updateUI();
  });
});