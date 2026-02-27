// main.js — Application Entry Point
// Demonstrates the refactored Module + Namespace Pattern

'use strict';

// Load all modules — namespaces populated by each require
require('./module3');
require('./module1');
require('./module2');
const ShopApp = require('./namespace');

const { Product, Cart } = ShopApp.Modules.Cart;
const { formatCartSummary } = ShopApp.Utils.Formatting;

// Usage — clean, no globals
const cart = new Cart();
const widget = new Product(1, 'Widget', 10.99);
const gadget = new Product(2, 'Gadget', 24.99);

cart.addItem(widget, 2);
cart.addItem(gadget, 1);

console.log(formatCartSummary(cart));
