var swiper = new Swiper('.mySwiper_0', {
  slidesPerView: 'auto',
  spaceBetween: 25,
  freeMode: true,
  speed: 500,

  // autoplay: {
  //   delay: 2000,
  // },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1024: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
  loop: true,
  slideToClickedSlide: true,
});