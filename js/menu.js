const refs = {
  menuButton: document.querySelector('[data-menu-button]'),
  menu: document.querySelector('[data-menu]'),
};

refs.menuButton.addEventListener('click', toggleMenu);

function toggleMenu() {
  const expanded = refs.menuButton.getAttribute('aria-expanded') === 'true';

  refs.menuButton.classList.toggle('is-open');
  refs.menuButton.setAttribute('aria-expanded', !expanded);

  refs.menu.classList.toggle('is-open');
}
