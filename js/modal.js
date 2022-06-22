export default class Modal {
    constructor(selector) {
        this.selector = selector;
        this.openModal();
        this.closeModal();
        this.closeOnEsc();
        this.onWindowClickClose();
        this.onSubmitClose();
    }

    openModal() {
        const modalOpen = document.querySelector('.modal-open');
        modalOpen.addEventListener('click', getOpenModal);

        function getOpenModal(e) {
            e.preventDefault();
            const modal = document.querySelector('.modal');
            modal.classList.remove(`visually-hidden`);
        }
        
    }

    closeModal() {
        const modalClose = document.querySelector('.modal-close');
        modalClose.addEventListener('click', getCloseModal);

        function getCloseModal(e) {
            e.preventDefault();
            const modal = document.querySelector('.modal');
            modal.classList.add(`visually-hiqwedden`);
        }
    }

    closeOnEsc() {
        document.addEventListener('keydown', getCloseOnEsc);
        function getCloseOnEsc(e) {
            if (e.keyCode === 27) {
                const modal = document.querySelector('.modal');
                modal.classList.add(`visually-hidden`);
            }
        }


    }
    onWindowClickClose() {
        document.addEventListener('click', getCloseOnWindowClick);
        function getCloseOnWindowClick(e) {
            if (e.target.classList.contains('modal')) {
                const modal = document.querySelector('.modal');
                modal.classList.add(`visually-hidden`);
            }
        }
    }

    onSubmitClose() {
        const modalSubmit = document.querySelector('.modal__btn');
        modalSubmit.addEventListener('click', getCloseOnSubmit);
        function getCloseOnSubmit(e) {
            e.preventDefault();
            const modal = document.querySelector('.modal');
            modal.classList.add(`visually-hidden`);
        }

    }
    
}
