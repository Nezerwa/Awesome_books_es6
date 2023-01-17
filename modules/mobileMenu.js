// handle menu

const nav = document.querySelector('.navigation');
const listGroup = document.querySelector('.right');
const openMenu = document.querySelector('#menuBarIcon');
const closeMenu = document.querySelector('#closeMenuIcon');
const handleClose = () => {
  nav.style.transform = '';
  listGroup.style.transform = '';
};

openMenu.addEventListener('click', () => {
  nav.style.transform = 'translateX(0%)';
  listGroup.style.transform = 'translateX(0%)';
});

closeMenu.addEventListener('click', () => {
  handleClose();
});

export default handleClose;