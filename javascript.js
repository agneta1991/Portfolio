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

const projects = {
  project_one: {
    project_name: ['Tonic'],
    project_info: ['Canopy', 'Facebook', 'Back End Dev', 2015],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: ['images/Snapshoot_Portfolio.png'],
    technologies: ['HTML', 'Ruby on rails', 'CSS', 'JavaScript'],
    link: 'https://link-to-live-project.com',
    source: 'https://github.com/username/project-repository',
  },

  project_two: {
    project_name: ['Multi-post Stories', 'Uber Navvigation'],
    project_info: ['Canopy', 'Uber', 'Back End Dev', 'Lead Developer', 2015],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: ['images/Snapshoot_Portfolio_(1).png'],
    technologies: ['HTML', 'Ruby on rails', 'CSS', 'JavaScript'],
    link: 'https://link-to-live-project.com',
    source: 'https://github.com/username/project-repository',
  },

  project_three: {
    project_name: ['Tonic'],
    project_info: ['Canopy', 'Back End Dev', 2015],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: ['images/Snapshoot_Portfolio_(2).png', 'images/desktop-pictures/Snapshoot_Portfolio.png'],
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://link-to-live-project.com',
    source: 'https://github.com/username/project-repository',
  },

  project_four: {
    project_name: ['Multi-Post Stories'],
    project_info: ['Canopy', 'Facebook', 'Back End Dev', 'Full Stack Dev', 2015],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: ['images/Snapshoot_Portfolio (3).png'],
    technologies: ['HTML', 'Ruby on rails', 'CSS', 'JavaScript'],
    link: 'https://link-to-live-project.com',
    source: 'https://github.com/username/project-repository',
  },
};

const seeProject1 = document.getElementById('see-project1');
const seeProject2 = document.getElementById('see-project2');
const seeProject3 = document.getElementById('see-project3');
const seeProject4 = document.getElementById('see-project4');

seeProject1.addEventListener('touchstart', popupFunction);
seeProject2.addEventListener('touchstart', popupFunction);
seeProject3.addEventListener('touchstart', popupFunction);
seeProject4.addEventListener('touchstart', popupFunction);

function popupFunction(){
  let div = document.createElement('div');
  div.id = 'dynamic-project';
  div.className = 'project';
  div.innerHTML='im here';
  workSection.appendChild(div);
}