const cartItems = JSON.parse(localStorage.getItem("proList"));
const cartContainer = document.querySelector(".shoppingcart-elements");
const totalContainer = document.querySelector(".total");
let total = 0;
let price = cartItems.forEach(function (cartElement) {
  cartContainer.innerHTML = "";

  total += parseInt(cartElement.price);
  console.log(total),
    (cartContainer.innerHTML += `

    <div class="pro-list">
    <h5>${cartElement.name}</h5>
    <a href="specific-product.html"> <img src="${cartElement.image}"  class="cart-image cart-thumbnail" "alt="${cartElement.alt}"  /></a>
 
    </div>
   
    `);
});
totalContainer.innerHTML = `Total: ${total}`;
