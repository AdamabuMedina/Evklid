let mySwiper = new Swiper('.swiper-container', {
  slidesPerwiew: 1,
  spaceBetween: 0,

  breakpoints: {
    // when window width is >= 320px
    420: {
      slidesPerView: 1,
      spaceBetween: 5
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 1,
      spaceBetween: 5
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 1,
      spaceBetween: 5
    }
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


})