const { checkInventory, processPayment, shipOrder } = require("./library.js");

const order = {
  items: [
    ["sunglasses", 1],
    ["bags", 2],
  ],
  giftcardBalance: 80,
};

checkInventory(order)
  .then((r) => {
    // Write the correct return statement here:
    return processPayment(r);
  })
  .then((resolvedValueArray) => {
    // Write the correct return statement here:
    return shipOrder(resolvedValueArray);
  })
  .then((successMessage) => {
    console.log(successMessage);
  })
  .catch((errorMessage) => {
    console.log(errorMessage);
  });
