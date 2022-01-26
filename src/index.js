import './index.scss';
import "@fancyapps/ui/dist/fancybox.css";

import $ from "jquery";

import Slider from "./modules/Slider";

// слайдер новостей на главной
new Slider("#main-slider");

// новости
new Slider("#articles", {center: false}, true);

// о компании
new Slider("#about-slider", {center: false});

// партнеры
new Slider("#partners-slider", {center: false});

// анонсы
new Slider("#announcements", {center: false}, true, 760);

// галлерея
new Slider("#gallery-slider", {center: false});

// мобильное меню
$('#toggle-menu-btn').click(() => {
    $('#menu-wrapper').toggleClass('header_menu--opened');
});

// спойлеры
let spoilers = document.querySelectorAll('.spoiler_header');
for(let i = 0; i < spoilers.length; i++) {
    spoilers[i].addEventListener('click', (event) => {
        console.log(spoilers[i].nextElementSibling.classList.toggle('spoiler_content--active'));
    });
}