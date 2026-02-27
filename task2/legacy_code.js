// legacy_code.js — Original code with anti-pattern annotations
// Lab 4.2: Anti-Pattern Refactoring

// ANTI-PATTERN: Global Namespace Pollution (Ch. 4)
var taxRate = 0.08;          // global variable — risk of conflict
var currency = "USD";        // global variable — risk of conflict

// ANTI-PATTERN: Constructor Function instead of ES6 class (Ch. 4)
function Product(id, name, price) {
  this.id = id;
  this.name = name;
  this.price = price;
}

function Cart() {
  this.items = [];
}
// ANTI-PATTERN: Prototype mutation — methods scattered outside constructor (Ch. 4)
Cart.prototype.addItem = function(product, quantity) {
  this.items.push({ product: product, quantity: quantity });
};
Cart.prototype.getSubtotal = function() {
  var total = 0;
  for (var i = 0; i < this.items.length; i++) {
    total += this.items[i].product.price * this.items[i].quantity;
  }
  return total;
};
// ANTI-PATTERN: Tight Coupling — directly reads global taxRate (Ch. 4)
Cart.prototype.getTax = function() {
  return this.getSubtotal() * taxRate;
};
Cart.prototype.getTotal = function() {
  return this.getSubtotal() + this.getTax();
};

// ANTI-PATTERN: No module — formatPrice uses global currency
function formatPrice(amount) {
  return currency + " " + amount.toFixed(2);
}

var cart = new Cart();
var p1 = new Product(1, "Widget", 10.99);
cart.addItem(p1, 2);
console.log("Total: " + formatPrice(cart.getTotal()));
