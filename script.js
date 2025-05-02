
const text = "Young Cowboy";
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

document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});
