// console.log('Hi');

// Menu click event

const menuBtn = document.querySelector('.header__hamburger');
const navMobile = document.querySelector('.header__nav');

menuBtn.addEventListener('click', function () {
  // Your code to be executed when the button is clicked
  menuBtn.classList.toggle('header__hamburger--actived');
  navMobile.classList.toggle('header__nav--actived');
});
