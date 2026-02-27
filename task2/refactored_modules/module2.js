// module2.js — Utility Module
// Formatting and display utilities — separated from business logic

'use strict';

const ShopApp = require('./namespace');
const { CURRENCY } = require('./module3');

ShopApp.Utils.Formatting = (() => {
  // Private — reusable locale formatting
  const formatCurrency = (amount, currency = CURRENCY) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
    }).format(amount);
  };

  const formatCartSummary = (cart) => {
    const lines = cart.items.map(({ product, quantity }) => {
      return `  ${product.name} x${quantity} = ${formatCurrency(product.price * quantity)}`;
    });
    return [
      '=== Cart Summary ===',
      ...lines,
      `Subtotal: ${formatCurrency(cart.getSubtotal())}`,
      `Tax:      ${formatCurrency(cart.getTax())}`,
      `Total:    ${formatCurrency(cart.getTotal())}`,
    ].join('\n');
  };

  return { formatCurrency, formatCartSummary };
})();

module.exports = ShopApp;
