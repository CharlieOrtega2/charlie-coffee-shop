let cart = [];
let total = 0;

function addToCart(name, price, button){

  const card = button.parentElement;

  const size = card.querySelector(".size").value;
  const milk = card.querySelector(".milk").value;

  const item = {
    name,
    size,
    milk,
    price
  };

  cart.push(item);

  total += price;

  updateCart();
}

function updateCart(){

  const cartItems = document.getElementById("cartItems");
  const totalDisplay = document.getElementById("total");

  cartItems.innerHTML = "";

  cart.forEach(item => {

    const div = document.createElement("div");

    div.classList.add("cart-item");

    div.innerHTML = `
      <strong>${item.name}</strong><br>
      Size: ${item.size}<br>
      Milk: ${item.milk}<br>
      Price: $${item.price.toFixed(2)}
    `;

    cartItems.appendChild(div);

  });

  totalDisplay.textContent = total.toFixed(2);
}

function checkout(){

  if(cart.length === 0){
    alert("Cart is empty!");
    return;
  }

  alert(
    "Thank you for ordering from Charlie's Coffee Shop!\n" +
    "Total: $" + total.toFixed(2)
  );

  cart = [];
  total = 0;

  updateCart();
}
function toggleCart(){
  document.getElementById("cartPanel").classList.toggle("open");
}
function checkout(){

  if(cart.length === 0){
    alert("Cart is empty!");
    return;
  }

  document.getElementById("orderScreen").style.display = "flex";

  setTimeout(() => {
    document.getElementById("orderScreen").style.display = "none";

    alert("Order Complete ☕ Enjoy your coffee!");

    cart = [];
    total = 0;
    updateCart();

  }, 3000);
}
let coffeeSound = new Audio("https://www.soundjay.com/buttons/sounds/button-09.mp3");

function addToCart(name, price, button){
  coffeeSound.play();
  const card = button.parentElement;

  const size = card.querySelector(".size").value;
  const milk = card.querySelector(".milk").value;

  const item = {
    name,
    size,
    milk,
    price
  };

  cart.push(item);

  total += price;

  updateCart();
}ssounds/
ssss