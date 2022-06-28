export default class Modal {

    openModal() {

        let modal = document.querySelector('.modal__container');
        let modalContactUs = document.querySelector('.contactus-modal__container');
        let modalBtnContactUs = document.querySelector('.nav__btn-white');
        let modalBtn = document.querySelector('.nav__btn');
        
        modalBtnContactUs.addEventListener('click', (e) => {
            e.preventDefault();
            modalContactUs.classList.toggle('visually-hidden');
            
        }
        )


        modalBtn.onclick = (e) => {
            e.preventDefault();
            modal.classList.toggle('visually-hidden');  
        }

        window.onkeydown = (e) => {
         
            if (e.keyCode === 27) { 
                e.preventDefault();
                modal.classList.add('visually-hidden');
                modalContactUs.classList.add('visually-hidden');
            }
        }   
    }

    openBurgerModal = () => {
        let modal = document.querySelector('.modal__container');
        let burgerBtn = document.querySelector('.burger-menu__btn');
        burgerBtn.onclick = (e) => {
            e.preventDefault();
            modal.classList.toggle('visually-hidden');
            
        }
    
            
        }
}
