const menuIcon = document.getElementById('fa-bars');
const menuExit = document.getElementById('fa-close');
const menuContent = document.querySelectorAll('.menu-content > a');
const menuPage = document.getElementById('menu-page');

function menuIconFunction(event) {
  event.preventDefault();
  menuPage.style.display = 'flex';
}

function exitFunction(event) {
  event.preventDefault();
  menuPage.style.display = 'none';
}

function scrollSection(event) {
  event.preventDefault();
  const sectionId = this.getAttribute('href');
  const targetedSection = document.querySelector(sectionId);
  targetedSection.scrollIntoView({ behavior: 'smooth' });
}

menuIcon.addEventListener('touchstart', menuIconFunction);
menuExit.addEventListener('touchstart', exitFunction);
menuPage.addEventListener('touchstart', exitFunction);

menuContent.forEach((individualSection) => {
  individualSection.addEventListener('touchstart', scrollSection);
});

menuIcon.addEventListener('click', menuIconFunction);
menuExit.addEventListener('click', exitFunction);
menuPage.addEventListener('click', exitFunction);

menuContent.forEach((individualSection) => {
  individualSection.addEventListener('click', scrollSection);
});