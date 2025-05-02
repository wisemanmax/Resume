// Typing animation
const text = "Byheir Wise";
const typedText = document.querySelector('.typed-text');
const cursor = document.querySelector('.cursor');
let charIndex = 0;

function type() {
  if (charIndex < text.length) {
    typedText.textContent += text.charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    cursor.style.display = 'none';
  }
}
type();

// Fade + scale images
const fadeElements = document.querySelectorAll('.fade-up, .fade-in');
const imageWrappers = document.querySelectorAll('.image-wrapper');

const contentObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.3 });

const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const wrapper = entry.target;
    if (entry.isIntersecting) {
      wrapper.classList.add('expanded');
      wrapper.classList.remove('collapsed');
    } else {
      wrapper.classList.remove('expanded');
      wrapper.classList.add('collapsed');
    }
  });
}, { threshold: 0.5 });

fadeElements.forEach(el => contentObserver.observe(el));
imageWrappers.forEach(wrapper => {
  wrapper.classList.add('collapsed');
  imageObserver.observe(wrapper);
});

// Theme toggle
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});
