// init date
const badge = document.querySelectorAll('.badge');
let date = new Date();

badge.forEach(bdg => {
  bdg.innerText = `${date.getDate()} ${date.toLocaleString('default', { month: 'short' })} ${date.getFullYear()}`;
});

// on scroll action
const hero = document.querySelector('.hero-content');
const navbar = document.querySelector('.nav-container');
window.addEventListener('scroll', () => {
  let y = window.scrollY / 60;
  hero.style.marginTop = y + '%';
});

// navbar toggle
const navToggle = document.getElementById('nav-toggle');
const navContainer = document.querySelector('.nav-container');
navToggle.addEventListener('click', () => {
  navContainer.classList.toggle('active');
});

// copyright year
document.getElementById('cr-yr').innerText = new Date().getFullYear();