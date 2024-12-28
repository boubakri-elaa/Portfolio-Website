
// Initialize AOS Library
AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
});

// Initialize Particles.js
particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3 },
  },
});

  const menuToggle = document.querySelector("#menu-toggle");
  const menu = document.querySelector(".menu");

  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
    menuToggle.classList.toggle("active");
  });

  let words = ['Web Developer', 'Designer'];
  let currentWord = 0;
  let element = document.querySelector('.typing-effect');
  
  function typeAndErase() {
    element.textContent = words[currentWord]; // Write the current word
    element.style.animation = 'none'; // Reset the animation
  
    setTimeout(() => {
      element.style.animation = ''; // Trigger the animation again
    }, 50);
  
    currentWord = (currentWord + 1) % words.length; // Switch between words
  
    // Time before erasing and typing again
    setTimeout(typeAndErase, 3000);
  }
  
  document.addEventListener('DOMContentLoaded', typeAndErase);

