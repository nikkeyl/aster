import Swiper, { Navigation, Pagination } from 'swiper';

/*
Pagination,
EffectFade,
Autoplay,
Parallax,
*/

import "@scss/components/swiper";
//import "@scss/libs/swiper";
//import 'swiper/css';

export function initSliders() {
    if (document.querySelector('.bytes__slider')) {
        new Swiper('.bytes__slider', {
            modules: [Navigation, Pagination],
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 15,
            autoHeight: false,
            speed: 800,
            simulateTouch: true,

            pagination: {
                el: '.bytes__pagination',
                clickable: true,
                type: 'bullets'
            },

            navigation: {
                prevEl: '.bytes__prev',
                nextEl: '.bytes__next',
            }
        });
    }
    if (document.querySelector('.slider-creators__slider')) {
        new Swiper('.slider-creators__slider', {
            modules: [Navigation],
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 15,
            autoHeight: false,
            speed: 800,
            simulateTouch: true,

            navigation: {
                prevEl: '.slider-creators__prev',
                nextEl: '.slider-creators__next',
            }
        });
    }
}