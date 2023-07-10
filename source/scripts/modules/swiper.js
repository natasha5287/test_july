import Swiper from 'swiper';
import { Pagination,  Navigation } from 'swiper/modules';

const sliderNews = new Swiper('.news__slider', {
    modules: [Pagination],
    slidesPerView: 1,
    initialSlide: 0,
    watchOverflow: true,
    speed: 800,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        768: {
            spaceBetween: 20,
            slidesPerView: 2,
        },
        1440: {
            slidesPerView: 3,
            spaceBetween: 20,
        }
    }
});

const sliderReview = new Swiper('.review__slider', {
    modules: [Navigation],
    slidesPerView: 1,
    initialSlide: 0,
    watchOverflow: true,
    spaceBetween: 20,
    speed: 800,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})
