const refs = {
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
};

refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);

refs.modal.addEventListener('click', e => {
  if (e.target !== e.currentTarget) return;
  e.currentTarget.classList.add('is-hidden');
});

function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
}
