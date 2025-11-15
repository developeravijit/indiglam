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
      delay: 0,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
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
      delay: 0,
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
      depth: 300,
      modifier: 1,
      slideShadows: true,
    },
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
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
  const hearts = document.querySelectorAll(".fa-heart");
  const popup = document.getElementById("wishlistPopup");

  hearts.forEach((heart) => {
    heart.addEventListener("click", () => {
      // Toggle heart
      heart.classList.toggle("fa-solid");
      heart.classList.toggle("active");

      // Show popup only when item is added
      if (heart.classList.contains("fa-solid")) {
        showPopup("Your item added to wishlist");
      } else {
        showPopup("Removed from wishlist");
      }
    });
  });

  function showPopup(message) {
    popup.textContent = message;
    popup.classList.add("show");

    // Auto hide after 2 seconds
    setTimeout(() => {
      popup.classList.remove("show");
    }, 1000);
  }

  // Add to cart
  const plusButtons = document.querySelectorAll(".bottomSwiper-right");
  const cartButton = document.getElementById("cartPopup");

  plusButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const isActive = btn.classList.toggle("active");
      if (isActive) {
        showPopup("Your item added to cart");
      } else {
        showPopup("Removed from cart");
      }
    });
  });

  function showPopup(message) {
    cartButton.textContent = message;
    cartButton.classList.add("show");

    setTimeout(() => {
      cartButton.classList.remove("show");
    }, 1000);
  }

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
      { threshold: 0.1 }
    );

    observer.observe(section);
  }

  // Progress Bar Amount Change
  const priceRange = document.getElementById("priceRange");
  const priceValue = document.getElementById("priceValue");

  // Format number with commas (Indian format)
  function formatIndianNumber(num) {
    return num.toLocaleString("en-IN");
  }

  priceRange.addEventListener("input", () => {
    const minPrice = 10000;
    const maxPrice = priceRange.value;
    priceValue.textContent = `${formatIndianNumber(
      minPrice
    )} - ${formatIndianNumber(maxPrice)}`;
  });

  // Filter Bar
  const sortDropdown = document.querySelector(".sort-dropdown");
  const sortToggle = document.getElementById("sortToggle");
  const sortItems = document.querySelectorAll(".sort-menu li");
  const selectedOption = document.querySelector(".selected-option");
  const viewButtons = document.querySelectorAll(".view-btn");

  viewButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      viewButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });

  // toggle dropdown
  sortToggle.addEventListener("click", () => {
    sortDropdown.classList.toggle("active");
  });

  // close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    if (!sortDropdown.contains(e.target)) {
      sortDropdown.classList.remove("active");
    }
  });

  // handle selection
  sortItems.forEach((item) => {
    item.addEventListener("click", () => {
      // remove active from all
      sortItems.forEach((i) => i.classList.remove("active"));

      // add active to selected
      item.classList.add("active");

      // update button text
      selectedOption.textContent = item.textContent;

      // close dropdown
      sortDropdown.classList.remove("active");
    });
  });

  // Page Numbering Buttons
  const buttons = document.querySelectorAll(
    ".pageNumber-btn:not(.next-btn):not(.prev-btn)"
  );
  const nextBtn = document.querySelector(".next-btn");
  const prevBtn = document.querySelector(".prev-btn");
  const visibleCount = 4; // number of visible buttons
  let startIndex = 0;

  // Update visible buttons and disable states
  function updateVisibleButtons() {
    buttons.forEach((btn, index) => {
      btn.style.display =
        index >= startIndex && index < startIndex + visibleCount
          ? "inline-flex"
          : "none";
    });

    // Disable arrows if at start or end
    prevBtn.classList.toggle("disabled", startIndex === 0);
    nextBtn.classList.toggle(
      "disabled",
      startIndex + visibleCount >= buttons.length
    );
  }

  // Set active state
  function setActiveButton(btn) {
    buttons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  }

  // Initial setup
  updateVisibleButtons();
  setActiveButton(buttons[0]);

  // Handle number click
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => setActiveButton(btn));
  });

  // Handle next
  nextBtn.addEventListener("click", () => {
    if (startIndex + visibleCount < buttons.length) {
      startIndex += visibleCount;
      updateVisibleButtons();
      setActiveButton(buttons[startIndex]);
    }
  });

  // Handle previous
  prevBtn.addEventListener("click", () => {
    if (startIndex - visibleCount >= 0) {
      startIndex -= visibleCount;
      updateVisibleButtons();
      setActiveButton(buttons[startIndex]);
    }
  });

  // Add To Cart in shop page
  const addToCartBtn = document.querySelectorAll(".addTo-cart");

  addToCartBtn.forEach((toCartBtn) => {
    toCartBtn.addEventListener("click", () => {
      toCartBtn.textContent = "Go to Cart";
      toCartBtn.disabled = true;
    });
  });

  // Link to image tag

  const linkImg = document.querySelectorAll(".card-img");

  linkImg.forEach((imgBtn) => {
    imgBtn.addEventListener("click", () => {
      setTimeout(() => {
        window.location.href = "product.html";
      }, 500);
    });
  });
});
