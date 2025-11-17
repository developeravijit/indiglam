window.addEventListener("DOMContentLoaded", () => {
  // Swiper 1

  const swiper1 = new Swiper(".swiper1", {
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,

    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });

  // Swiper 2
  const swiper2 = new Swiper(".swiper2", {
    slidesPerView: 1,
    spaceBetween: 10,
    // centeredSlides: true,
    loop: true,

    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
  // Swiper 3
  const swiper3 = new Swiper(".swiper3", {
    slidesPerView: 1,
    spaceBetween: 10,
    // centeredSlides: true,
    loop: true,

    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
  // Swiper 4
  const swiper4 = new Swiper(".swiper4", {
    slidesPerView: 1,
    spaceBetween: 10,
    // centeredSlides: true,
    loop: true,

    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });

  // Swiper 5
  const swiper5 = new Swiper(".swiper5", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    allowTouchMove: false,
    simulateTouch: false,
    grabCursor: false,
    slideToClickedSlide: false,
    freeMode: true,
    effect: "coverflow",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 300,
      modifier: 1,
      slideShadows: true,
    },
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
    },
    speed: 2000,
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      576: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
    },
  });
  // Swiper 6
  const swiper6 = new Swiper(".swiper6", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    freeMode: true,
    allowTouchMove: false,
    simulateTouch: false,
    grabCursor: false,
    slideToClickedSlide: false,
    centeredSlides: true,
    effect: "coverflow",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 150,
      modifier: 1,
      slideShadows: true,
    },
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
    },
    speed: 2000,
    breakpoints: {
      1200: {
        slidesPerView: 5,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
        coverflowEffect: {
          rotate: 30,
        },
      },
      576: {
        slidesPerView: 2,
        coverflowEffect: {
          rotate: 0,
        },
      },
    },
  });

  // Swiper 7
  const swiper7 = new Swiper(".swiper7", {
    slidesPerView: 1,
    loop: true,
    freeMode: true,
    allowTouchMove: false,
    simulateTouch: false,
    slideToClickedSlide: false,
    centeredSlides: true,
    effect: "coverflow",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 300,
      modifier: 1,
      slideShadows: false,
    },
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
    },
    speed: 1500,
    breakpoints: {
      1200: {
        slidesPerView: 3,
      },

      768: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 1,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: false,
      dynamicBullets: true,
    },
  });
});
