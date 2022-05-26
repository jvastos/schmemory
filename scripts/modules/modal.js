const element = {
    modal: document.getElementById("modal"),
    modalContent: document.getElementById("modal-content"),
}

export function showModal(moves, time) {
    setTimeout(() => {
        element.modalContent.innerHTML = `Nice!</br></br>You've made it in ${time}</br>using ${moves} moves.`;
        element.modal.style.display = "block";
    }, 500)
}

export function hideModal() {
    element.modal.style.display = "none";
    location.reload();
}