export default class BrgMenu {
  
        
        burgerMenu() {
            const burger = document.querySelector('.burger');
            const brgMenu = document.querySelector('.burger__menu');
            const brgMenuItem = document.querySelector('.burger-menu');
            const btgBtn = document.querySelector('.burger-menu__btn');
            burger.onclick = () => {
                brgMenu.classList.toggle('is-active');
                brgMenuItem.classList.toggle('show__burger-menu');
               
            }
            btgBtn.onclick = () => {
                brgMenu.classList.toggle('is-active');
                brgMenuItem.classList.remove('show__burger-menu');
               
            }

        }
        
       
  
}
