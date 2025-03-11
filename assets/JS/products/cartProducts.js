document.addEventListener("DOMContentLoaded", () => {
  const products = [
    {
      name: "lip gloss ( muse beauty )",
      price: 99.99,
      color: "rgba(220, 67, 67, 1)",
      image: "../assets/images/cart-product.png",
    },
    {
      name: "lip gloss ( muse beauty )",
      price: 99.99,
      color: "rgba(198, 166, 166, 1)",
      image: "../assets/images/cart-product.png",
    },
    {
      name: "lip gloss ( muse beauty )",
      price: 99.99,
      color: "rgba(235, 51, 124, 1)",
      image: "../assets/images/cart-product.png",
    }
  ];

  function renderCartItems(products) {
    const container = document.getElementById("cart-container");
    const html = products.map(product => {
      return `
      <div>
        <div class="cart-item">
          <img src="${product.image}" alt="${product.name}" class="cart-product-image">
          <div class="cart-product-details">
            <p class="cart-product-name">${product.name}</p>
            <p class="cart-product-price">${product.price} sar</p>
            <p class="cart-product-color">
              color :
              <span class="color-circle" style="background-color: ${product.color};"></span>
            </p>
          </div>
          <div class="cart-buttons">
              <div class='counter-group'>
                  <button class="counter">-</button>
                  <input class="counter-input " type="number" value="1" min="1" readonly>
                  <button class="counter">+</button>
              </div>
            <p class="unique-price">${product.price} sar</p>
          </div>
        </div>
      </div>
      `;
    }).join("");
    container.innerHTML = html;
  }

  renderCartItems(products);
});
