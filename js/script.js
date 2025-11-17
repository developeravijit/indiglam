// Page Loader
window.onload = function () {
  setTimeout(() => {
    const loader = document.getElementById("onload-loader");
    const content = document.getElementById("onload-content");

    loader.classList.add("fade-out");

    setTimeout(() => {
      loader.classList.add("onload-hidden");
      content.classList.remove("onload-hidden");
      // initCounterObserver();
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

  // Wishlist
  const hearts = document.querySelectorAll(".fa-heart");
  const popup = document.getElementById("wishlistPopup");

  function showPopup(message) {
    console.log(message);
    popup.textContent = message;
    popup.classList.add("show");

    // Auto hide after 2 seconds
    setTimeout(() => {
      popup.classList.remove("show");
    }, 1000);
  }

  hearts.forEach((heart) => {
    heart.addEventListener("click", () => {
      // Toggle heart
      heart.classList.toggle("fa-solid");
      heart.classList.toggle("active");

      // Show popup only when item is added
      if (heart.classList.contains("fa-solid")) {
        showPopup("Your item added to wishlist");
        console.log(
          "Your Items added to wishlist",
          heart.classList.contains("fa-solid")
        );
      } else {
        showPopup("Removed from wishlist");
      }
    });
  });

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

  
});
