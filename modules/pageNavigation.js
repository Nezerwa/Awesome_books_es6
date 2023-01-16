import handleClose from './mobileMenu.js';

const list = document.querySelector('#list');
const add = document.querySelector('#add');
const contact = document.querySelector('#contact');

// sections
const navLinks = document.querySelectorAll('.right-list');
const listSection = document.querySelector('#books-list');
const addBookSection = document.querySelector('#add-new');
const contactSection = document.querySelector('#contact-us');

navLinks.forEach((listEl) => listEl.addEventListener('click', handleClose));

list.addEventListener('click', () => {
  listSection.classList.remove('display');
  addBookSection.classList.add('display');
  contactSection.classList.add('display');
});
add.addEventListener('click', () => {
  listSection.classList.add('display');
  addBookSection.classList.remove('display');
  contactSection.classList.add('display');
});

contact.addEventListener('click', () => {
  listSection.classList.add('display');
  addBookSection.classList.add('display');
  contactSection.classList.remove('display');
});
const defaultDisplay = () => {
  listSection.classList.remove('display');
  addBookSection.classList.add('display');
  contactSection.classList.add('display');
};

export default defaultDisplay;