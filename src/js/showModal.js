export default function showModal(text, btn, gameBody) {
  const modalWindow = document.createElement('div');
  modalWindow.className = 'modal';
  modalWindow.innerHTML = `<div class="modal_message"><p>${text}</p><button class="btn">${btn}</button></div>`;
  gameBody.insertBefore(modalWindow, gameBody.firstChild);
  const button = document.querySelector('.btn');
  button.addEventListener('click', () => document.location.reload());
}
