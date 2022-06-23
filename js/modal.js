export default class Modal {

    openModal() {

        let modal = document.querySelector('.modal__container');
        let modalBtn = document.querySelector('.nav__btn');
        
        modalBtn.onclick = () => {
            modal.classList.toggle('visually-hidden');
            
        }
        window.onkeydown = (e) => {
            if (e.keyCode === 27) {
                modal.classList.toggle('visually-hidden');
            }
        }   
    }

    openBurgerModal = () => {
        let modal = document.querySelector('.modal__container');
        let burgerBtn = document.querySelector('.burger-menu__btn');
        burgerBtn.onclick = () => {
            modal.classList.toggle('visually-hidden');
            
        }
    
            
        }
}
