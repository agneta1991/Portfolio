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
  div.className = 'project project-'+(i+1);
  workSection.appendChild(div);

  let secondDiv = document.createElement('div');
  secondDiv.id = 'container'+ i;
  secondDiv.className = 'container';
  document.getElementById('dynamic-project'+ i).appendChild(secondDiv);

  let image = document.createElement('img');
  image.id ='image'+ i;
  image.className = 'image-mobile';
  image.alt = 'Project picture';
  image.src = projects[i].image_mobile;
  document.getElementById('container' + i).appendChild(image);

  let dimage = document.createElement('img');
  dimage.id ='image'+ i;
  dimage.className = 'image-desktop'
  dimage.alt = 'Project picture';
  dimage.src = projects[i].image_desktop;
  document.getElementById('container' + i).appendChild(dimage);

  let h3 = document.createElement('h3');
  h3.id= 'client-name'+ i;
  h3.className = 'client-name li-mobile';
  h3.innerHTML = projects[i].project_name_mobile;
  document.getElementById('container'+ i).appendChild(h3);

  let h3desktop = document.createElement('h3');
  h3desktop.id = 'client-name-desktop' + i;
  h3desktop.className = 'client-name client-name-desktop';
  h3desktop.innerHTML = projects[i].project_name_desktop;
  document.getElementById('container'+ i).appendChild(h3desktop);

  let ul = document.createElement('ul');
  const info = projects[i].project_info_mobile;
  info.forEach(individualInfoitem => {
    let li = document.createElement('li');
    li.id = 'li'+i;
    li.className = 'li-mobile';
    li.innerHTML = individualInfoitem;
    ul.appendChild(li);
  });
  document.getElementById('container'+i).appendChild(ul);

  let desktopUl = document.createElement('ul');
  const desktopinfo = projects[i].project_info_desktop;
  desktopinfo.forEach(individualdesktop => {
    let desktopli = document.createElement('li');
    desktopli.id = 'desktopli'+i;
    desktopli.className = 'li-desktop';
    desktopli.innerHTML = individualdesktop;
    desktopUl.appendChild(desktopli);
  });
  document.getElementById('container'+i).appendChild(desktopUl);

  let p = document.createElement('p');
  p.className = 'about-project project-mobile';
  p.innerHTML = projects[i].description_mobile;
  document.getElementById('container'+ i).appendChild(p);

  let desktopp = document.createElement('p');
  desktopp.className = 'about-project project-desktop';
  desktopp.innerHTML = projects[i].description_desktop;
  document.getElementById('container'+ i).appendChild(desktopp);

  let technologyDiv = document.createElement('div');
  technologyDiv.id = 'technologyDiv' + i;
  technologyDiv.className = 'buttons';
  document.getElementById('container'+ i).appendChild(technologyDiv);

  let technologyUl = document.createElement('ul');
  let technoLi = projects[i].technologies_mobile;

  technoLi.forEach(individualTechLiItem => {
    let secondLi = document.createElement ('li');
    secondLi.innerHTML = individualTechLiItem;
    technologyUl.appendChild(secondLi);
  })
  document.getElementById('technologyDiv' + i).appendChild(technologyUl);

  let btn = document.createElement('button');
  btn.id = 'see-project'+(i+1);
  btn.className = 'see-project';
  btn.type = 'submit';
  btn.innerHTML = 'See project';
  document.getElementById('container'+ i).appendChild(btn);

  let clientName = document.getElementById('desktopli'+i);
  clientName.classList.add('name');
  let mobileClientName = document.getElementById('li'+i);
  mobileClientName.classList.add('name');
}

let seeProjects = document.querySelectorAll('[id^="see-project"]');
seeProjects.forEach(individualProject=>{
  console.log(individualProject.id);
})

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