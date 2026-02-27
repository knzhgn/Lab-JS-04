// module1.js — Core Module: Product and Cart
// Module Pattern (Ch. 7, "The Module Pattern") + ES6 Classes (Ch. 5)
// Eliminates: global variables, prototype mutations, tight coupling

'use strict';

const ShopApp = require('./namespace');
const { TAX_RATE, CURRENCY } = require('./module3');

// Module Pattern: IIFE creates private scope
ShopApp.Modules.Cart = (() => {
  // ES6 Class replaces constructor function + prototype mutations
  class Product {
    #id;
    #name;
    #price;

    constructor(id, name, price) {
      if (price < 0) throw new RangeError('Price cannot be negative');
      this.#id = id;
      this.#name = name;
      this.#price = price;
    }

    get id() { return this.#id; }
    get name() { return this.#name; }
    get price() { return this.#price; }
  }

  class Cart {
    // Private state — no global variables
    #items = [];
    #taxRate;

    // Dependency injection: taxRate passed in, not read from global
    constructor(taxRate = TAX_RATE) {
      this.#taxRate = taxRate;
    }

    addItem(product, quantity) {
      if (!(product instanceof Product)) throw new TypeError('Expected a Product instance');
      if (quantity < 1) throw new RangeError('Quantity must be at least 1');
      this.#items.push({ product, quantity });
    }

    getSubtotal() {
      return this.#items.reduce((total, { product, quantity }) => {
        return total + product.price * quantity;
      }, 0);
    }

    getTax() {
      return this.getSubtotal() * this.#taxRate;
    }

    getTotal() {
      return this.getSubtotal() + this.getTax();
    }

    get items() {
      return [...this.#items]; // Return copy — prevent external mutation
    }
  }

  // Expose public API only
  return { Product, Cart };
})();

module.exports = ShopApp;
