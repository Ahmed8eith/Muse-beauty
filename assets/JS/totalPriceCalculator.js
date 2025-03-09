document.addEventListener("DOMContentLoaded", () => {
    /**
     * Calculates the price for a single product (price × quantity).
     * Updates that product's*/
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
  
      // Calculate the total price and update the .cart-price element
      const totalPrice = basePrice * quantity;
      cartItem.querySelector(".cart-price").innerText = `${totalPrice.toFixed(2)} sar`;
    }
  
    /**
     * Sums all .cart-price values and updates the order summary.
     * SUBTOTAL => <h4> under "SUBTOTAL"
     * order total => <h3> under "order total"
     */
    function updateCartSubtotal() {
      let sum = 0;
  
      // Sum every <p class="cart-price">
      document.querySelectorAll(".cart-price").forEach((priceElement) => {
        const text = priceElement.innerText.replace(" sar", "");
        const value = parseFloat(text);
        if (!isNaN(value)) {
          sum += value;
        }
      });
  
      // Update SUBTOTAL (the <h4> next to "SUBTOTAL")
      const subtotalElement = document.querySelector(".summary-details .total-details h4");
      if (subtotalElement) {
        subtotalElement.innerText = `${sum.toFixed(2)} sar`;
      }
  
      // Shipping (20) + Tax (0), as per your example
      const shipping = 20;
      const tax = 0;
      const finalTotal = sum + shipping + tax;
  
      // Update the order total (<h3> under "order total")
      const orderTotalElement = document.querySelector(".order-total h3");
      if (orderTotalElement) {
        orderTotalElement.innerText = `${finalTotal.toFixed(2)} sar`;
      }
    }
  
    /**
     * Attach listeners to the minus/plus buttons and the input's change event.
     * On any change, recalc that product's total, then recalc the overall subtotal.
     */
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
          // Recalc this product
          calculateTotal(input);
          // Update overall totals
          updateCartSubtotal();
        });
      });
    }
  
    // Wait a tick so that cartProducts.js has rendered items
    setTimeout(() => {
      // Attach event listeners to newly rendered elements
      attachEventListeners();
  
      // Update the subtotal once on initial load
      updateCartSubtotal();
    }, 0);
  });
  