
const projects = [
  {

    id: 0,
    project_name_mobile: 'Tonic',
    project_name_desktop: 'Tonic',
    project_info_mobile: ['Canopy', 'Back End Dev', 2015],
    project_info_desktop: ['Facebook', 'Back End Dev', 2015],
    description_mobile: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description_desktop: 'Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    description_popup: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image_mobile: ['images/Snapshoot_Portfolio.png'],
    image_desktop: ['images/Snapshoot_Portfolio.png'],
    technologies_mobile: ['HTML', 'CSS', 'JavaScript'],
    technologies_desktop: ['HTML', 'Ruby on rails', 'CSS', 'JavaScript'],
    linkicon: ['<i class="fa-light fa-arrow-up-left-from-circle fa-flip-horizontal"></i>'],
    link: 'https://link-to-live-project.com',
    source: 'https://github.com/username/project-repository',

  },
  {

    id: 1,
    project_name_mobile: 'Multi-post Stories',
    project_name_desktop: 'Uber Navvigation',
    project_info_mobile: ['Canopy', 'Back End Dev', 2015],
    project_info_desktop: ['Uber', 'Lead Developer', 2015],
    description_mobile: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description_desktop: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    description_popup: 'Lorem Ipsum is simply dummy text of the printing and. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only electronic typesetting, remaining essent',
    image_mobile: 'images/Snapshoot_Portfolio_(1).png',
    image_desktop: 'images/Snapshoot_Portfolio_(1).png',
    technologies_mobile: ['HTML', 'CSS', 'JavaScript'],
    technologies_desktop: ['HTML', 'Ruby on rails', 'CSS', 'JavaScript'],
    linkicon: ['<i class="fa-light fa-arrow-up-left-from-circle fa-flip-horizontal"></i>'],
    link: 'https://link-to-live-project.com',
    source: 'https://github.com/username/project-repository',

  },

  {

    id: 2,
    project_name_mobile: 'Tonic',
    project_name_desktop: 'Tonic',
    project_info_mobile: ['Canopy', 'Back End Dev', 2015],
    project_info_desktop: ['Canopy', 'Back End Dev', 2015],
    description_mobile: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description_desktop: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description_popup: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image_mobile: 'images/Snapshoot_Portfolio_(2).png',
    image_desktop: 'images/desktop-pictures/Snapshoot_Portfolio.png',
    technologies_mobile: ['HTML', 'CSS', 'JavaScript'],
    technologies_desktop: ['HTML', 'CSS', 'JavaScript'],
    linkicon: ['<i class="fa-light fa-arrow-up-left-from-circle fa-flip-horizontal"></i>'],
    link: 'https://link-to-live-project.com',
    source: 'https://github.com/username/project-repository',

  },

  {

    id: 3,
    project_name_mobile: 'Multi-Post Stories',
    project_name_desktop: 'Multi-Post Stories',
    project_info_mobile: ['Canopy', 'Back End Dev', 2015],
    project_info_desktop: ['Facebook', 'Full Stack Dev', 2015],
    description_mobile: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description_desktop: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    description_popup: 'Lorem Ipsum is simply dummy text of the printing and. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only electronic typesetting, remaining essent',
    image_mobile: 'images/Snapshoot_Portfolio_(3).png',
    image_desktop: 'images/Snapshoot_Portfolio_(3).png',
    technologies_mobile: ['HTML', 'CSS', 'JavaScript'],
    technologies_desktop: ['HTML', 'Ruby on rails', 'CSS', 'JavaScript'],
    linkicon: ['<i class="fa-light fa-arrow-up-left-from-circle fa-flip-horizontal"></i>'],
    link: 'https://link-to-live-project.com',
    source: 'https://github.com/username/project-repository',

  }
];

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

/*everything below is creting elements and adding content from array*/

for (let i = 0; i <= projects.length - 1; i++) {
  const div = document.createElement('div');
  div.id = `dynamic-project`+ i;
  div.className = `project project-` + i + 1;
  workSection.appendChild(div);

  const secondDiv = document.createElement('div');
  secondDiv.id = `container` + i;
  secondDiv.className = 'container';
  document.getElementById(`dynamic-project` + i).appendChild(secondDiv);

  const image = document.createElement('img');
  image.id = `image` + i;
  image.className = 'image-mobile';
  image.alt = 'Project picture';
  image.src = projects[i].image_mobile;
  document.getElementById(`container` + i).appendChild(image);

  const dimage = document.createElement('img');
  dimage.id = `dimage` + i;
  dimage.className = 'image-desktop';
  dimage.alt = 'Project picture';
  dimage.src = projects[i].image_desktop;
  document.getElementById(`container${i}`).appendChild(dimage);

  const h3 = document.createElement('h3');
  h3.id = `client-name` + i;
  h3.className = 'client-name li-mobile';
  h3.innerHTML = projects[i].project_name_mobile;
  document.getElementById(`container` + i).appendChild(h3);

  const h3desktop = document.createElement('h3');
  h3desktop.id = `client-name-desktop` + i;
  h3desktop.className = 'client-name client-name-desktop';
  h3desktop.innerHTML = projects[i].project_name_desktop;
  document.getElementById(`container` + i).appendChild(h3desktop);

  const ul = document.createElement('ul');
  const info = projects[i].project_info_mobile;
  info.forEach((individualInfoitem) => {
    const li = document.createElement('li');
    li.id = `li` + i;
    li.className = 'li-mobile';
    li.innerHTML = individualInfoitem;
    ul.appendChild(li);
  });
  document.getElementById(`container` + i).appendChild(ul);

  const desktopUl = document.createElement('ul');
  const desktopinfo = projects[i].project_info_desktop;
  desktopinfo.forEach((individualdesktop) => {
    const desktopli = document.createElement('li');
    desktopli.id = `desktopli` + i;
    desktopli.className = 'li-desktop';
    desktopli.innerHTML = individualdesktop;
    desktopUl.appendChild(desktopli);
  });
  document.getElementById(`container` + i).appendChild(desktopUl);

  const p = document.createElement('p');
  p.className = 'about-project project-mobile';
  p.innerHTML = projects[i].description_mobile;
  document.getElementById(`container` + i).appendChild(p);

  const desktopp = document.createElement('p');
  desktopp.className = 'about-project project-desktop';
  desktopp.innerHTML = projects[i].description_desktop;
  document.getElementById(`container` + i).appendChild(desktopp);

  const technologyDiv = document.createElement('div');
  technologyDiv.id = `technologyDiv` + i;
  technologyDiv.className = 'buttons';
  document.getElementById(`container` + i).appendChild(technologyDiv);

  const technologyUl = document.createElement('ul');
  const technoLi = projects[i].technologies_mobile;

  technoLi.forEach((individualTechLiItem) => {
    const secondLi = document.createElement('li');
    secondLi.innerHTML = individualTechLiItem;
    technologyUl.appendChild(secondLi);
  });
  document.getElementById(`technologyDiv` + i).appendChild(technologyUl);

  const btn = document.createElement('button');
  btn.id = `see-project` + (i + 1);
  btn.className = 'see-project';
  btn.value = i;
  btn.type = 'submit';
  btn.innerHTML = 'See project';
  document.getElementById(`container` + i).appendChild(btn);

  const clientName = document.getElementById(`desktopli` + i);
  clientName.classList.add('name');
  const mobileClientName = document.getElementById(`li` + i);
  mobileClientName.classList.add('name');
}

/*everything below is creating pop up see project*/

const seeProjects = document.querySelectorAll('[id^="see-project"]');
seeProjects.forEach((individualProject) => {
  individualProject.addEventListener('touchstart', popupFunction);
});


function popupFunction (event){
  const whichbtn = event.target.value;

  let locationPopup = document.getElementById('wrapperId');
  locationPopup.scrollIntoView({ behavior: 'smooth' });
  let i= whichbtn;
  let popupPage = document.createElement('div');
  popupPage.id = 'popPageId' + i;
  popupPage.className = 'project popup';
  locationPopup.appendChild(popupPage);

  let popupContainer = document.createElement('div');
  popupContainer.className = 'container';
  popupPage.appendChild(popupContainer);

  let nameDiv = document.createElement('div');
  nameDiv.className = 'nameDiv';
  popupContainer.appendChild(nameDiv);

  let popuph3 = document.createElement('h3');
  popuph3.className= 'client-name li-mobile';
  popuph3.innerHTML = projects[i].project_name_mobile;
  nameDiv.appendChild(popuph3);

  let popuph3D = document.createElement('h3');
  popuph3D.className= 'client-name client-name-desktop';
  popuph3D.innerHTML = projects[i].project_name_desktop;
  nameDiv.appendChild(popuph3D);

  let iconPopup = document.createElement('i');
  iconPopup.id = 'fa-close' + i;
  iconPopup.className='fa fa-close';
  iconPopup.value = i;
  iconPopup.style="color: #67798e;";

  iconPopup.addEventListener('click', function() {
    const popPage = document.getElementById('popPageId' + i);
    if (popPage) {
      popPage.style.display = 'none';
    }
  });
  nameDiv.appendChild(iconPopup);

  let popupUl = document.createElement('ul');
  popupUl.className = 'mobile-li';
  const popupInfo = projects[i].project_info_mobile;
  popupInfo.forEach((individualInfoitem) => {
    const popupli = document.createElement('li');
    popupli.className = 'li-mobile';
    popupli.innerHTML = individualInfoitem;
    popupUl.appendChild(popupli);
  });
  popupContainer.appendChild(popupUl);

  let popupUlD = document.createElement('ul');
  popupUlD.className = 'desktop-li';
  const popupInfoD = projects[i].project_info_desktop;
  popupInfoD.forEach((individualInfoitemD) => {
    const popupliD = document.createElement('li');
    popupliD.className = 'li-desktop';
    popupliD.innerHTML = individualInfoitemD;
    popupUlD.appendChild(popupliD);
  });
  popupContainer.appendChild(popupUlD);

  let popupimg = document.createElement('img');
  popupimg.className = 'image-mobile';
  popupimg.alt = 'Project picture';
  popupimg.src = projects[i].image_mobile;
  popupContainer.appendChild(popupimg);

  let popupimgD = document.createElement('img');
  popupimgD.className = 'image-desktop';
  popupimgD.alt = 'Project picture';
  popupimgD.src = projects[i].image_desktop;
  popupContainer.appendChild(popupimgD);

  let popupP = document.createElement('p');
  popupP.className = 'about-project project-mobile';
  popupP.innerHTML = projects[i].description_popup;
  popupContainer.appendChild(popupP);

  let wrapperDiv = document.createElement('div');
  wrapperDiv.className = 'desktop-div';
  popupContainer.appendChild(wrapperDiv);

  let popupPD = document.createElement('p');
  popupPD.className = 'about-project project-desktop';
  popupPD.innerHTML = projects[i].description_popup;
  wrapperDiv.appendChild(popupPD);

  const technDiv = document.createElement('div');
  technDiv.className = 'buttons';
  popupContainer.appendChild(technDiv);

  const techUl = document.createElement('ul');
  const techLi = projects[i].technologies_mobile;
  techLi.forEach((indilTechLiItem) => {
    const sLi = document.createElement('li');
    sLi.innerHTML = indilTechLiItem;
    techUl.appendChild(sLi);
  });

  technDiv.appendChild(techUl);

  let popupSecondDiv = document.createElement('div');
  popupSecondDiv.className = 'buttonsContainer';
  popupContainer.appendChild(popupSecondDiv);

  let popupBtn = document.createElement('button')
  popupBtn.className = 'see-project link';
  popupBtn.innerHTML = 'See live'
  popupBtn.type = 'submit';
  popupSecondDiv.appendChild(popupBtn);

  let popupSecondBtn = document.createElement('button')
  popupSecondBtn.className = 'see-project source';
  popupSecondBtn.type = 'submit';
  popupSecondBtn.innerHTML = 'See source';
  popupSecondDiv.appendChild(popupSecondBtn);

};

const closeIcons = document.querySelectorAll('[id^="fa-close"]');
closeIcons.forEach((icon) => {
  icon.addEventListener('click', closePopup);
});

function closePopup(event) {
  location.reload;
}
