import { productArray } from "./constants/productsList.js";
const productsContainer = document.querySelector(".section-featured ");

const shopCart = document.querySelector(".shop-cart");
const proList = document.querySelector(".pro-list");
const totalContainer = document.querySelector(".total");
let cartArray = [];
productArray.forEach(function (product) {
  productsContainer.innerHTML += `
  <section class="section-featured">
   <div class="featured-products">
   <img src="${product.image}"  class="image1" "alt="${product.alt}"  />
          <div class="featured-products-detail">
            <h2>${product.name}</h2>
            <p>${product.price}</p>
            <p>${product.description}</p>
            <button class="cta-buy" data-product="${product.id}">BUY</button>
          </div>
        </div>
        </section>
   `;
});

const buttons = document.querySelectorAll("button");
buttons.forEach(function (button) {
  button.onclick = function (event) {
    const itemToAdd = productArray.find((item) => item.id === event.target.dataset.product);
    cartArray.push(itemToAdd);
    console.log(cartArray);
    showShopCart(cartArray);
    localStorage.setItem("proList", JSON.stringify(cartArray));
  };
});
function showShopCart(cartItems) {
  shopCart.style.display = "block";
  proList.innerHTML = "";
  let total = 0;

  cartItems.forEach(function (cartElement) {
    total += parseInt(cartElement.price);
    proList.innerHTML += `
   
      <div class="pro-list">
      <h5>${cartElement.name}</h5>
      <a href="specific-product.html"><img src="${cartElement.image}"  class="cart-image" "alt="${cartElement.alt}" /></a>
      </div>
     
      `;
  });
  totalContainer.innerHTML = `Total: ${total} `;
}
