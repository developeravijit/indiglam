window.addEventListener("DOMContentLoaded", () => {
  // AddToCart Increasing or Decreasing Number
  const decreaseBtn = document.getElementById("decrease");
  const increaseBtn = document.getElementById("increase");
  const quantityDisplay = document.getElementById("quantity");
  const totalPriceEl = document.getElementById("totalPrice");

  let quantity = 1;
  const basePrice = 50000; // your product price

  // Function to update price
  function updatePrice() {
    const total = basePrice * quantity;
    totalPriceEl.textContent = `Rs ${total.toLocaleString()}`;
  }

  // Increase
  increaseBtn.addEventListener("click", () => {
    quantity++;
    quantityDisplay.textContent = quantity;
    updatePrice();
  });

  // Decrease
  decreaseBtn.addEventListener("click", () => {
    if (quantity > 1) {
      quantity--;
      quantityDisplay.textContent = quantity;
      updatePrice();
    }
  });

  // Continue to Cart Change Button Behaviour
  const continueBtn = document.getElementById("continueBtn");

  continueBtn.addEventListener("click", () => {
    // Change text
    continueBtn.textContent = "Go to Cart";

    continueBtn.disabled = true;
    continueBtn.style.opacity = "0.7";

    // Redirect after a short delay
    // setTimeout(() => {
    //   window.location.href = "cart.html";
    // }, 500);
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
