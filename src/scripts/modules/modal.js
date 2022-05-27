const element = {
  modal: document.querySelector('.modal'),
  modalContent: document.querySelector('.modal-content'),
};

export function showModal(moves, time) {
  setTimeout(() => {
    element.modal.style.display = 'block';
    element.modalContent.innerHTML = `Nice!</br></br>You've made it in ${time}</br>using ${moves} moves.`;
  }, 500);
}

export function hideModal() {
  element.modal.style.display = 'none';
  location.reload();
}
