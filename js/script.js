// Page Loader
window.onload = function () {
  setTimeout(() => {
    const loader = document.getElementById("onload-loader");
    const content = document.getElementById("onload-content");

    loader.classList.add("fade-out");

    setTimeout(() => {
      loader.classList.add("onload-hidden");
      content.classList.remove("onload-hidden");
      initCounterObserver();
    }, 500);
  }, 1000);
};

document.addEventListener("DOMContentLoaded", () => {
  // Animated Text Dynamic
  function typeEffect(element, speed) {
    let text = element.textContent.trim();
    element.textContent = "";
    let i = 0;

    let timer = setInterval(() => {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);
  }

  const speed = 50;
  const elements = document.querySelectorAll(".animation-para");

  elements.forEach((el) => {
    el.style.display = "inline-block";
    typeEffect(el, speed);
  });

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
      delay: 0,
      disableOnInteraction: false,
    },
    speed: 4000,
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
      delay: 0,
      disableOnInteraction: false,
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
    spaceBetween: 30,
    loop: true,
    freeMode: true,
    centeredSlides: true,
    effect: "coverflow",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 300,
      modifier: 1,
      slideShadows: true,
    },
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    speed: 4000,
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
      clickable: true,
      dynamicBullets: true,
    },
  });

  // Wishlist
  const heart = document.querySelectorAll(".fa-heart");
  heart.forEach((heart) => {
    heart.addEventListener("click", () => {
      heart.classList.toggle("fa-solid");
      heart.classList.toggle("active");
    });
  });
  // Add to cart
  const plusButtons = document.querySelectorAll(".bottomSwiper-right");

  plusButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("active");
    });
  });

  // Counting Numbers
  const counters = document.querySelectorAll(".count");
  const totalDuration = 2000; // total time for animation (2s)
  const easeOutQuad = (t) => t * (2 - t);

  // Counter animation function
  function startCounters() {
    counters.forEach((counter) => {
      counter.innerText = "0 +"; // reset before starting
      const target = Number(counter.getAttribute("data-target")) || 0;
      let startTime = null;

      const updateCount = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / totalDuration, 1);
        const easedProgress = easeOutQuad(progress);
        const current = Math.floor(target * easedProgress);

        if (progress < 1) {
          counter.innerText = current.toLocaleString() + " +";
          requestAnimationFrame(updateCount);
        } else {
          counter.innerText = formatNumber(target) + " +";
        }
      };

      requestAnimationFrame(updateCount);
    });
  }

  // Number formatter (K / L)
  function formatNumber(num) {
    if (num >= 100000) return Math.floor(num / 100000) + "M";
    if (num >= 1000) return Math.floor(num / 1000) + "K";
    return num.toString();
  }

  // Intersection Observer to trigger animation once
  const section = document.querySelector(".counting-numbers");
  let hasAnimated = false;

  if (section) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            startCounters();
            hasAnimated = true; // run only once
            observer.unobserve(section); // stop observing
          }
        });
      },
      { threshold: 0.5 } // 50% visible before triggering
    );

    observer.observe(section);
  }
});
