window.addEventListener("DOMContentLoaded", () => {
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
  const cartPopup2 = document.getElementById("cartPopup2");

  addToCartBtn.forEach((toCartBtn) => {
    toCartBtn.addEventListener("click", () => {
      toCartBtn.textContent = "Go to Cart";
      toCartBtn.disabled = true;

      cartPopup2.classList.add("show");
      setTimeout(() => {
        cartPopup2.classList.remove("show");
      }, 2000);
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
