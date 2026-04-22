// Titulos para o efeito de digitação
const titulos = [
  "Front End ",
  "JavaScript ",
  "Back End ",
  "Python ",
  "PHP ",
  "Full Stack "
];

const span = document.querySelector(".meus-titulos");

let index = 0;
let charIndex = 0;
let isDeleting = false;

// Efeito de digitação nos titulos
function typeEffect() {
  const current = titulos[index];

  if (isDeleting) {
    span.textContent = current.substring(0, charIndex);
    charIndex--;
  } else {
    span.textContent = current.substring(0, charIndex);
    charIndex++;
  }

  let speed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === current.length) {
    speed = 1200;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % titulos.length;
    speed = 300;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();

// Parallax na foto

let rotateX = 0;
let rotateY = 0;
let extraRotate = 0;

let mouseX = 0;
let mouseY = 0;
let centerX = 0;
let centerY = 0;

function updateImageTransform() {
  const img = document.querySelector(".foto");

  img.style.transform = `
    perspective(600px)
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
    rotate(${extraRotate}deg)
    scale(1.1)
  `;

  img.style.filter = `
    brightness(1.1)
    contrast(1.1)
    drop-shadow(${(mouseX - centerX)/10}px ${(mouseY - centerY)/10}px 20px rgba(0,0,0,0.3))
  `;
}

    document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".foto-container");
    const shine = document.querySelector(".shine");

    container.addEventListener("mousemove", (e) => {
        const rect = container.getBoundingClientRect();

        // posição do mouse
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // centro
        centerX = rect.width / 2;
        centerY = rect.height / 2;

        // rotação 3D
        rotateX = -(y - centerY) / 15;
        rotateY = (x - centerX) / 15;

        // brilho
        const percentX = x / rect.width;
        const percentY = y / rect.height;

        shine.style.transform = `
        translate(${percentX * 50}%, ${percentY * 50}%)
        `;

        // atualiza imagem
        mouseX = x;
        mouseY = y;

        updateImageTransform();
    });

    container.addEventListener("mouseleave", () => {
        rotateX = 0;
        rotateY = 0;

        mouseX = centerX;
        mouseY = centerY;

        shine.style.transform = `translate(0%, 0%)`;

        updateImageTransform();
    });
});