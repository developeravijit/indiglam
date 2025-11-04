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
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
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
});
