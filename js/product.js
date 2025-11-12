window.addEventListener("DOMContentLoaded", () => {
  // Product Magnifying
  const container = document.querySelector(".product-img");
  const lightbox = document.getElementById("imageLightbox");
  const lightboxImg = lightbox.querySelector("img");

  // Open lightbox on image click
  container.addEventListener("click", () => {
    const mainImg = container.querySelector("img");
    lightboxImg.src = mainImg.src;

    // Make sure display is reset before showing
    lightbox.style.display = "flex";
    // Force reflow to ensure CSS transition re-runs
    void lightbox.offsetWidth;
    lightbox.classList.add("show");
  });

  // Close lightbox when clicking anywhere
  lightbox.addEventListener("click", () => {
    lightbox.classList.remove("show");

    // Wait for the fade-out animation to finish before hiding
    lightbox.addEventListener(
      "transitionend",
      () => {
        if (!lightbox.classList.contains("show")) {
          lightbox.style.display = "none";
        }
      },
      { once: true }
    );
  });

  // Close lightbox when clicking anywhere
  lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  // AddToCart Increasing or Decreasing Number
  const decreaseBtn = document.getElementById("decrease");
  const increaseBtn = document.getElementById("increase");
  const quantityDisplay = document.getElementById("quantity");

  let quantity = 1;

  increaseBtn.addEventListener("click", () => {
    quantity++;
    quantityDisplay.textContent = quantity;
  });

  decreaseBtn.addEventListener("click", () => {
    if (quantity > 1) {
      quantity--;
      quantityDisplay.textContent = quantity;
    }
  });

  // Product Details Switching
  const tabLinks = document.querySelectorAll(".tab-link");
  const tabPanes = document.querySelectorAll(".tab-pane");
  const underline = document.querySelector(".tab-underline");

  function moveUnderline(activeTab) {
    const tabRect = activeTab.getBoundingClientRect();
    const parentRect = activeTab.parentElement.getBoundingClientRect();
    const left = tabRect.left - parentRect.left;
    const width = tabRect.width;

    underline.style.width = width + "px";
    underline.style.transform = `translateX(${left}px)`;
  }

  const activeTab = document.querySelector(".tab-link.active");
  if (activeTab) moveUnderline(activeTab);

  tabLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const target = link.getAttribute("data-tab");

      tabLinks.forEach((l) => l.classList.remove("active"));
      tabPanes.forEach((p) => p.classList.remove("active"));

      link.classList.add("active");
      document.getElementById(target).classList.add("active");

      // move underline
      moveUnderline(link);
    });
  });

  window.addEventListener("resize", () => {
    const current = document.querySelector(".tab-link.active");
    if (current) moveUnderline(current);
  });
});
