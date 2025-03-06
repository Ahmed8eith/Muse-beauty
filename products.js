// Products List
export const products = () => [
    "ureadin Bath Gel", 
    "Hidraderm HYAL", 
    "aqua Face Cleanser",
    "ureadin Bath Gel",
    "Hidraderm HYAL",
    "aqua Face Cleanser"
];

const productImage = "assets/product.png"; 
const productPrice = "99.99 SAR";
const heart= "assets/heart 21.png"

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("products-container");

    // map through each product...
    const htmlString = products().map(product => `
        <div class="product-card">

            <div class="img-container">
                <img class="product-image" src="${productImage}" alt="${product}">
                <button class="heart-button"><img class="heart-img" src="${heart}" alt= "heart" "></button>
                <h2 class="product-name">${product}</h2>
            </div>

            <p class="product-price">${productPrice}</p>

        </div>
    `).join('');

    container.innerHTML = htmlString;
});
