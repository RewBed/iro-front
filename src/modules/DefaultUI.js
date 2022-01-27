class DefaultUI {

    /**
     * Спойлеры
     */
    static spoiler() {
        let spoilers = document.querySelectorAll('.spoiler_header');
        for(let i = 0; i < spoilers.length; i++) {
            spoilers[i].addEventListener('click', () => {
                spoilers[i].nextElementSibling.classList.toggle('spoiler_content--active');
            });
        }
    }

    /**
     * Копировать UI
     */
    static copyUI() {
        let copyUIBtn = document.querySelectorAll('.default-ui_header');
        for(let i = 0; i < copyUIBtn.length; i++) {
            copyUIBtn[i].addEventListener('click', () => {
                navigator.clipboard.writeText(copyUIBtn[i].nextElementSibling.innerHTML.toString())
                    .then(() => {
                        console.log('copy')
                    })
                    .catch(err => {
                        console.log('Something went wrong', err);
                    });
            });
        }
    }

    /**
     * Мобильное меню
     */
    static mobileMenu() {
        let menuWrapper = document.getElementById('menu-wrapper');
        let menuBTN = document.getElementById('toggle-menu-btn');
        menuBTN.addEventListener('click', () => {
            menuWrapper.classList.toggle('header_menu--opened')
        });
    }
}

export default DefaultUI;