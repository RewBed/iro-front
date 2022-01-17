import "@fancyapps/ui/dist/fancybox.css";
import { Carousel } from "@fancyapps/ui";
import $ from "jquery";

class Slider {

    /**
     * Класс отображающий, что слайдер уже запущен
     *
     * @type {string}
     */
    initClass = "sliderInit";

    /**
     * Экземпляр fancybox Carousel
     *
     * @type {Carousel}
     */
    sliderItem = undefined;

    /**
     * Разрешение на котором слайдер появляется в мобильной версии
     *
     * @type {number}
     */
    mobileWidth = 0;

    /**
     * Слайдер отображается только на мобильной версии
     *
     * @type {boolean}
     */
    onlyMobile = false;

    /**
     *
     * @type {Element}
     */
    domElement = undefined;

    /**
     * Параметры fancybox Carousel
     *
     * @type {{}}
     */
    options = {};

    /**
     * Первоночальное состояние слайдера
     *
     * @type {undefined}
     */
    innerHtml = undefined;

    /**
     * @param element
     * @param options
     * @param onlyMobile
     * @param mobileWidth
     */
    constructor(element = '', options = {}, onlyMobile = false, mobileWidth = 960) {
        this.domElement = document.querySelector(element);
        this.mobileWidth = mobileWidth;
        this.onlyMobile = onlyMobile;
        this.options = options;

        if(this.domElement) {

            this.innerHtml = this.domElement.innerHTML;

            if(this.onlyMobile) {
                if($(window).width() <= this.mobileWidth) {
                    this.initSlider();
                }
            }
            else {
                this.initSlider();
            }
        }

        this.resizer();
    }

    /**
     * Метод следит за изменением разрешения экрана
     */
    resizer() {
        $(window).on('load resize', () => {
            if(this.onlyMobile) {
                if($(window).width() <= this.mobileWidth) {
                    this.initSlider();
                }

                else {
                    this.removeSlider();
                }
            }
        });
    }

    /**
     * Создать слайдер
     */
    initSlider() {
        if(!this.domElement.classList.contains(this.initClass)) {
            this.domElement.classList.add(this.initClass);
            this.sliderItem = new Carousel(this.domElement, this.options);
        }
    }

    /**
     * Удалить слайдер
     */
    removeSlider() {
        if(this.domElement.classList.contains(this.initClass)) {
            this.domElement.classList.remove(this.initClass);
            this.sliderItem.destroy();
            this.domElement.innerHTML = this.innerHtml;
        }
    }
}

export default Slider;