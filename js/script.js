const subscribeBtn = document.querySelector('.subscribe__btn'),
      signUpBtn = document.querySelector('.sign-up-block__button');
      navbar = document.querySelector('.navbar'),
      menuButton = document.querySelector('.menu-button');

const formSubmit = event => {
    event.preventDefault();
};

const signUpSubmit = event => {
    event.preventDefault();
};


subscribeBtn.addEventListener('submit', formSubmit);
signUpBtn.addEventListener('submit', signUpSubmit);

menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('menu-button_active');
    navbar.classList.toggle('navbar_active');
  });