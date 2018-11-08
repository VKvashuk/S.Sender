
var btnSocialOpen = document.querySelector('.btn-social--open');
var socialBlock = document.querySelector('.social');

btnSocialOpen.addEventListener('click', onToggleOpenSocial);

function onToggleOpenSocial() {
  socialBlock.classList.toggle('social--open');

  socialBlock.classList.contains('social--open') ? disableScrolling() : enableScrolling();
}

function disableScrolling() {
  var x=window.scrollX;
  var y=window.scrollY;
  window.onscroll=function() {window.scrollTo(x, y);};
}

function enableScrolling() {
  window.onscroll=function() {};
}

// $(document).ready(function() {
//   $('.sidebar').slimScroll();
// });
