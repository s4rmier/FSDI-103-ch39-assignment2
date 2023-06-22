// Gain access to the DOM elements
let prodName = document.getElementById("prod-name");
let prodPrice = document.getElementById("prod-price");
let prodQty = document.getElementById("prod-qty");
let subTotal = document.getElementById("sub-total");
let grandTotal = document.getElementById("grand-total");
let salesTax = document.getElementById("sales-tax");
let button = document.getElementById("button");

// Enable button to perform a task of calling the functions
button.addEventListener("click", () => {
  prodName.textContent = prompt("Enter product name: ");
  validateUserInput(prodPrice);
  validateUserInput(prodQty);
  updateDOM();
});

// Same as button
document.addEventListener("keydown", function (event) {
  if (event.key === "F3" || event.keyCode === 114) {
    prodName.textContent = prompt("Enter product name: ");
    validateUserInput(prodPrice);
    validateUserInput(prodQty);
    updateDOM();
  }
});

// validating whether the user's input is a number or not
let validateUserInput = (input) => {
  let userInput;
  let isValid = false;

  while (!isValid) {
    userInput =
      input === prodPrice ? prompt("Enter price:") : prompt("Enter quantity :");
    if (!isNaN(userInput)) {
      isValid = true;
      input.textContent = userInput;
    } else {
      alert("Please enter a valid number");
    }
  }
};

// update the DOM elements if the previous function executions are valid
let updateDOM = () => {
  let price = Number(prodPrice.textContent);
  let qty = Number(prodQty.textContent);
  subTotal.textContent = price * qty;
  let taxes = Number(subTotal.textContent) * 0.075;
  salesTax.textContent = taxes;
  let total = Number(subTotal.textContent) * 1.075;
  grandTotal.textContent = total;

  console.log(
    `${prodQty.textContent} pcs of ${prodName.textContent} at $${prodPrice.textContent} each has total cost of $${grandTotal.textContent}`
  );
};
