// Products List
export const products = () => [
    "ureadin Bath Gel", 
    "Hidraderm HYAL", 
    "aqua Face Cleanser",
    "ureadin Bath Gel",
    "Hidraderm HYAL",
    "aqua Face Cleanser"
];

const productImage = "./assets/images/product.png"; 
const productPrice = "99.99 SAR";
const heart = "./assets/images/heart 21.png";

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("products-container");

    // map HTML for products
    const htmlString = products().map(product => `
        <div class="product-card">
            <div class="img-container">
                <img class="product-image" src="${productImage}" alt="${product}">
                <button class="heart-button"><img class="heart-img" src="${heart}" alt="heart"></button>
                <h2 class="product-name">${product}</h2>
            </div>
            <p class="home-product-price">${productPrice}</p>
        </div>
    `).join('');

    container.innerHTML = htmlString;

    // add click event listener to each product card (navigates to product details page)
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('click', () => {
            window.location.href = "../pages/productDetails.html";
        });
    });
});
