document.addEventListener("DOMContentLoaded", () => {
  // Calculates the total price for a single product (price × quantity)
  function calculateTotal(quantityInput) {
    const quantity = parseInt(quantityInput.value, 10);
    if (isNaN(quantity) || quantity < 1) return;

    // Find the parent .cart-item container
    const cartItem = quantityInput.closest(".cart-item");

    // Get the base price from .cart-product-price (e.g. "99.99 sar")
    const basePriceText = cartItem
      .querySelector(".cart-product-price")
      .innerText.replace(" sar", "");
    const basePrice = parseFloat(basePriceText);

    // Calculate the total price and update the .price-price element
    const totalPrice = basePrice * quantity;
    cartItem.querySelector(".price-price").innerText = `${totalPrice.toFixed(2)} sar`;
  }

  // Sums all .price-price values and updates the order summary.
  function updateCartSubtotal() {
    let sum = 0;

    // Sum every <p class="price-price">
    document.querySelectorAll(".price-price").forEach((priceElement) => {
      const text = priceElement.innerText.replace(" sar", "");
      const value = parseFloat(text);
      if (!isNaN(value)) {
        sum += value;
      }
    });

    // Update SUBTOTAL (<h4> under .total-details)
    const subtotalElement = document.querySelector(".summary-details .total-details h4");
    if (subtotalElement) {
      subtotalElement.innerText = `${sum.toFixed(2)} sar`;
    }

    // Shipping (20) + Tax (0), as per your example
    const shipping = 20;
    const tax = 0;
    const finalTotal = sum + shipping + tax;

    // Update Order Total (<h3> under .order-total)
    const orderTotalElement = document.querySelector(".order-total h3");
    if (orderTotalElement) {
      orderTotalElement.innerText = `${finalTotal.toFixed(2)} sar`;
    }
  }

  // Attach listeners to minus/plus buttons and input change event
  function attachEventListeners() {
    document.querySelectorAll(".cart-item").forEach((item) => {
      const minusBtn = item.querySelector(".counter:first-of-type");
      const plusBtn = item.querySelector(".counter:last-of-type");
      const input = item.querySelector(".counter-input");

      // Minus button
      minusBtn.addEventListener("click", () => {
        let current = parseInt(input.value, 10);
        if (current > 1) {
          input.value = current - 1;
          calculateTotal(input);
          updateCartSubtotal();
        }
      });

      // Plus button
      plusBtn.addEventListener("click", () => {
        let current = parseInt(input.value, 10);
        input.value = current + 1;
        calculateTotal(input);
        updateCartSubtotal();
      });

      // Manual change in input
      input.addEventListener("change", () => {
        calculateTotal(input);
        updateCartSubtotal();
      });
    });
  }

  // Wait a tick so that cart items have been rendered, then attach listeners and update totals
  setTimeout(() => {
    attachEventListeners();
    updateCartSubtotal();
  }, 0);
});
