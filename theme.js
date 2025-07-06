const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const bgImage = document.querySelector('.background-image');

themeToggle.addEventListener('click', () => {
  body.classList.toggle('light-mode');

  const isLightMode = body.classList.contains('light-mode');

  // Change icon
  themeToggle.classList.toggle('fa-sun', !isLightMode);
  themeToggle.classList.toggle('fa-moon', isLightMode);

  // Change background image
  bgImage.style.backgroundImage = isLightMode 
    ? "url('images/bg-light.png')" 
    : "url('images/bg-dark.png')";
});
