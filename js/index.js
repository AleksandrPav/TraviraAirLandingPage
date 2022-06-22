import Modal from "/js/modal.js";

const modal = new Modal(".modal-open");

modal.openModal();
modal.closeModal();
modal.closeOnEsc();
modal.onWindowClickClose();
modal.onSubmitClose();
