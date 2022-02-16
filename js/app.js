// function for handling all Cost Together

function updatePrice(itemCostId, itemPrice) {
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

//Handle 8GB Memory Event Listener

document.getElementById("eightGB").addEventListener("click", function () {
  updatePrice("memory-cost", 100);
});

//Handle 16GB Memory Event Listener
document.getElementById("sixteenGB").addEventListener("click", function () {
  updatePrice("memory-cost", 200);
});

//Handle 256GB SSD Storage Event Listener
document.getElementById("ssd1").addEventListener("click", function () {
  updatePrice("storage-cost", 800);
});

//Handle 512GB SSD Storage Event Listener
document.getElementById("ssd2").addEventListener("click", function () {
  updatePrice("storage-cost", 1600);
});

//Handle 1TB SSD Storage Event Listener
document.getElementById("ssd3").addEventListener("click", function () {
  updatePrice("storage-cost", 3200);
});

//Handle  Free Delivery Option  Event Listener
document.getElementById("free-delivery").addEventListener("click", function () {
  updatePrice("delivery-cost", 0);
});

//Handle  paid Delivery Option  Event Listener
document.getElementById("paid-delivery").addEventListener("click", function () {
  updatePrice("delivery-cost", 20);
});
