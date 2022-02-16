// document.body.style.backgroundColor = "#CAD5E2";

// function for handling all Cost Together

function updatePrice(itemCostId, itemPrice) {
  console.log("line 6");
  const itemCost = document.getElementById(itemCostId);
  itemCost.innerText = itemPrice;

  //add all price to get total Price

  const bestPrice = document.getElementById("best-price").innerText;
  const memoryPrice = document.getElementById("memory-cost").innerText;
  const storageCost = document.getElementById("storage-cost").innerText;
  const deliveryCost = document.getElementById("delivery-cost").innerText;
  const totalPrice =
    parseFloat(bestPrice) +
    parseFloat(memoryPrice) +
    parseFloat(storageCost) +
    parseFloat(deliveryCost);
  const total = document.getElementById("total-price");
  total.innerText = totalPrice;
}
//Common Function For Event listener
function myProduct(clickId, updateId, price) {
  document.getElementById(clickId).addEventListener("click", function () {
    console.log("new");
    updatePrice(updateId, price);
    document.getElementById(clickId).style.backgroundColor = "cornflowerblue";
  });
}

//Handle 8GB Memory Event Listener
myProduct("eightGB", "memory-cost", 0);

//Handle 16GB Memory Event Listener
myProduct("sixteenGB", "memory-cost", 50);

//Handle 256 GB Storage Event Listener
myProduct("ssd1", "storage-cost", 0);

//Handle 512 GB Storage Event Listener
myProduct("ssd2", "storage-cost", 200);

//Handle 1TB Storage Event Listener
myProduct("ssd3", "storage-cost", 300);

//Handle Free DeliveryEvent Listener
myProduct("free-delivery", "delivery-cost", 0);

//Handle paid DeliveryEvent Listener
myProduct("paid-delivery", "delivery-cost", 20);

const promoCode = "sakib";

document.getElementById("apply-btn").addEventListener("click", function () {
  const inputBox = document.getElementById("promo-input");
  const userInput = inputBox.value;
  if (userInput == promoCode) {
    const total = document.getElementById("total-price");
    const totalPrice = parseFloat(total.innerText);
    const discount = totalPrice * 0.2;
    const discountAmount = document.getElementById("discount");
    discountAmount.innerText = discount;
    const newTotal = totalPrice - discount;
    total.innerText = newTotal;
    const successMessage = document.getElementById("promo-success");
    successMessage.style.display = "block";

    //disable button after promo applied
    document.getElementById("apply-btn").disabled = true;
  } else {
    const failMessage = document.getElementById("promo-fail");
    failMessage.style.display = "block";
  }
});

// //Handle 8GB Memory Event Listener

// document.getElementById("eightGB").addEventListener("click", function () {
//   updatePrice("memory-cost", 0);
// });

// //Handle 16GB Memory Event Listener
// document.getElementById("sixteenGB").addEventListener("click", function () {
//   updatePrice("memory-cost", 50);
// });

// //Handle 256GB SSD Storage Event Listener
// document.getElementById("ssd1").addEventListener("click", function () {
//   updatePrice("storage-cost", 0);
// });

// //Handle 512GB SSD Storage Event Listener
// document.getElementById("ssd2").addEventListener("click", function () {
//   updatePrice("storage-cost", 200);
// });

// //Handle 1TB SSD Storage Event Listener
// document.getElementById("ssd3").addEventListener("click", function () {
//   updatePrice("storage-cost", 300);
// });

// //Handle  Free Delivery Option  Event Listener
// document.getElementById("free-delivery").addEventListener("click", function () {
//   updatePrice("delivery-cost", 0);
// });

// //Handle  paid Delivery Option  Event Listener
// document.getElementById("paid-delivery").addEventListener("click", function () {
//   updatePrice("delivery-cost", 20);
// });
