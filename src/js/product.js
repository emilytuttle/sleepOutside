import { setLocalStorage, getLocalStorage, getParam, loadHeaderFooter } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";

const productId = getParam("product");
const dataSource = new ProductData("tents");

const product = new ProductDetails(productId, dataSource);

loadHeaderFooter()
product.init();

// // ADD TO CART
// let cartItems = [];
// if (getLocalStorage("so-cart")) {
//   cartItems = getLocalStorage("so-cart");
// } else {

//   setLocalStorage("so-cart", cartItems)
// }

// function addProductToCart(product) {
//   // Add the new product to the cartItems array
//   cartItems.push(product);

//   // Save the updated cartItems back to localStorage
//   setLocalStorage("so-cart", cartItems)
// }
// // add to cart button event handler
// async function addToCartHandler(e) {
//   const product = await dataSource.findProductById(e.target.dataset.id);
//   addProductToCart(product);
// }

// // add listener to Add to Cart button
// let addToCartButton = document.getElementById("addToCart")
// addToCartButton.addEventListener("click", addToCartHandler);
