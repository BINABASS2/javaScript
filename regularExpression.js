const regularExpr = /^\$\d+(\.\d{2})$/;
function isValidPrice(price) {
  return regularExpr.test(price);
}

const validPrices = ["$14.99", "$1234567.00"];
const invalidPrices = ["$14", "$1.1a", "money", ".90"];

for (const price of validPrices) {
  console.log(`${price} is a valid price: ${isValidPrice(price)}`);
}

for (const price of invalidPrices) {
  console.log(`${price} is a valid price: ${isValidPrice(price)}`);
}
