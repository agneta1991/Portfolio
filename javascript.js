const menuIcon = document.getElementById('fa-bars');
const menuExit = document.getElementById('fa-close');
const menuContent = document.querySelectorAll('.menu-content > a');
const menuPage = document.getElementById('menu-page');
const workSection = document.getElementById('work');

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
  menuPage.style.display = 'none';
}

menuIcon.addEventListener('touchstart', menuIconFunction);
menuExit.addEventListener('touchstart', exitFunction);

menuContent.forEach((individualSection) => {
  individualSection.addEventListener('touchstart', scrollSection);
});

menuIcon.addEventListener('click', menuIconFunction);
menuExit.addEventListener('click', exitFunction);

menuContent.forEach((individualSection) => {
  individualSection.addEventListener('click', scrollSection);
});

/* all below is the dom manipulation to creat work section*/
////////////////////////////////////////////////////////////
import { projects } from "./object-data-javascript.js";

for (let i = 0; i < projects.length; i++) {
  let div = document.createElement('div');
  div.id = 'dynamic-project' + [i];
  div.class = 'project'
  workSection.appendChild(div);

  let secondDiv = document.createElement('div');
  secondDiv.className = 'container';
  secondDiv.innerHTML =
  '<img src="' + projects[i].image[0] + '" alt="Project Image">' +
  '<h3 class="client-name li-mobile"' + projects[i].project_name + '</h3>' +
  '<h3 class="client-name client-name-desktop">' + projects[i].project_name[1] + '</h3>' +
  '<ul>' + '<li class="name li-mobile">' + projects[i].project_info[0] + 
    '<h2>' + projects[i].project_name + '</h2>' +
    '<p>' + projects[i].description_mobile + '</p>' +
    '<a href="' + projects[i].link + '">Visit Project</a>';

  document.getElementById('dynamic-project' + [i]).appendChild(secondDiv);

}

console.log(projects.length);

const seeProject1 = document.getElementById('see-project1');
const seeProject2 = document.getElementById('see-project2');
const seeProject3 = document.getElementById('see-project3');
const seeProject4 = document.getElementById('see-project4');

/*seeProject1.addEventListener('touchstart', popupFunction);
seeProject2.addEventListener('touchstart', popupFunction);
seeProject3.addEventListener('touchstart', popupFunction);
seeProject4.addEventListener('touchstart', popupFunction);

function popupFunction() {
  let div = document.createElement('div');
  div.id = 'dynamic-project';
  div.className = 'project';
  div.innerHTML = 'im here';
  workSection.appendChild(div);
}*/