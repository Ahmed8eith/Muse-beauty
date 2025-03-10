// Products List
export const products = () => [
    "ureadin Bath Gel", 
    "Hidraderm HYAL", 
    "aqua Face Cleanser",
    "ureadin Bath Gel",
    "Hidraderm HYAL",
    "aqua Face Cleanser",
    "ureadin Bath Gel",
    "Hidraderm HYAL",
    "aqua Face Cleanser",
    "ureadin Bath Gel",
    "Hidraderm HYAL",
    "aqua Face Cleanser",
];

const productImage = "../assets/images/product.png"; 
const productPrice = "99.99 SAR";
const heart = "../assets/images/heart 21.png";
const cart = "../assets/images/white-cart.png";

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("products-container");

    // Map through each product to create HTML for product cards
    const htmlString = products().map(product => `
        <div class="product-card shopping-product">
            <div class="img-container">
                <img class="product-image" src="${productImage}" alt="${product}">
                <button class="heart-button">
                    <img class="heart-img" src="${heart}" alt="heart">
                </button>
            </div>
            <button class="cart-btn">Add To Cart <img class="cart" src="${cart}" alt="cart"/></button>
            <h2 class="shop-product-name">${product}</h2>
            <p class="shop-product-price">${productPrice}</p>
        </div>
    `).join('');

    container.innerHTML = htmlString;

    // Add click event listener to each product card
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('click', () => {
            window.location.href = "../pages/productDetails.html";
        });
    });
});
