
const main = document.getElementsByClassName('main')[0];
const menubar = document.getElementsByClassName('menubar')[0];
const menuButton = document.getElementsByClassName('menuButton')[0];
const body = document.getElementsByTagName('body')[0];

if (window.innerWidth <= 960) {
  menubar.classList.add('hide');
} else {
  menubar.classList.add('show');
}

window.addEventListener('resize', function(e){
	if (e.target.innerWidth <= 960) {
    menubar.classList.remove('show');
    menubar.classList.add('hide');
  } else if (e.target.innerWidth > 960) {
    menubar.classList.remove('hide');
    menubar.classList.add('show');
  }
})
menuButton.addEventListener('click', function() {
  if (menubar.classList.contains('hide')) {
    menubar.classList.remove('hide');
    menubar.classList.add('show');
    body.classList.remove('scroll-show');
    body.classList.add('scroll-hide');

  } else {
    menubar.classList.remove('show');
    menubar.classList.add('hide');
    body.classList.remove('scroll-hide');
    body.classList.add('scroll-show');
  }
})