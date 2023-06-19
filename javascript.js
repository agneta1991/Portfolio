let menuIcon = document.getElementById('fa-bars');
let menuExit = document.getElementById('fa-xmark');
let menuContent = document.querySelectorAll('.menu-content > a');

menuIcon.addEventListener('touchstart', menuIconFunction);

function menuIconFunction() {
  document.getElementById('menu-page').style.display = 'flex';
}

menuExit.addEventListener('touchstart', exitFunction);

function exitFunction() {
  document.getElementById('menu-page').style.display = 'none';
}

menuContent.forEach(individualSection => {
  individualSection.addEventListener('touchstart', menuScroll);

  function menuScroll() {
    if (individualSection.className === 'menu-portfolio') {
      window.scrollTo(0, 400);
    }
    else if (individualSection.className === 'menu-about-myself') {
      window.scrollTo(0, 800);
    }
    else if (individualSection.className === 'menu-contact-form') {
      window.scrollTo(0, 600);
    }
  }
}
)


