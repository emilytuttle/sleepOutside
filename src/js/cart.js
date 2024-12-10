import { getLocalStorage } from "./utils.mjs";
import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter()

const cartItems = getLocalStorage("so-cart");
let cartTotal = document.querySelector(".cart-total");

function renderCartContents() {
  
  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  document.querySelector(".product-list").innerHTML = htmlItems.join("");

  let currentTotal = 0;
  for (let i = 0; i < cartItems.length; i++) {
    currentTotal += cartItems[i].FinalPrice;
  }
  console.log("current");
  console.log(currentTotal);
  if (currentTotal > 0) {
    
    cartTotal.innerHTML = `Total: ${currentTotal}`;
    console.log("rendered cart contents");
    console.log(cartItems);
  }
}

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;

  return newItem;
}
if (cartItems) {
  renderCartContents();
}
else {
  document.querySelector(".product-list").innerHTML = "Cart is empty"
  cartTotal.innerHTML = `Total: $0`;
}



