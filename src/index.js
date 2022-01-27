import './index.scss';
import "@fancyapps/ui/dist/fancybox.css";

import $ from "jquery";

import Slider from "./modules/Slider";
import DefaultUI from "./modules/DefaultUI";

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

// UI
DefaultUI.spoiler();
DefaultUI.copyUI();
DefaultUI.mobileMenu();

// мобильное меню
/*$('#toggle-menu-btn').click(() => {
    $('#menu-wrapper').toggleClass('header_menu--opened');
});*/
