/*
  Write each function according to the instructions.
  
  When a function's parameters reference `cart`, it references an object that looks like the one that follows.
  {
    "Gold Round Sunglasses": { quantity: 1, priceInCents: 1000 },
    "Pink Bucket Hat": { quantity: 2, priceInCents: 1260 }
  }
*/

function calculateCartTotal(cart) {
  let total = 0;
  for (let name in cart) {
    const item = cart[name];
    const quantity = item.quantity;
    const price = item.priceInCents;
    const totalPrice = quantity * price;

    total += totalPrice;
  }
  return total;
}

function printCartInventory(cart) {
  let array = [];
  for (let name in cart) {
    const item = cart[name];
    const quantity = item.quantity;

    array.push(quantity + "x" + name);
  }
  return array.join("\n");
}

module.exports = {
  calculateCartTotal,
  printCartInventory,
};
