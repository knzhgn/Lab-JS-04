// namespace.js — Namespace setup (Ch. 11, "Namespacing Patterns")
// Creates a hierarchical namespace to prevent global pollution

'use strict';

// Namespace Pattern: initialize top-level namespace
const ShopApp = {};

// Sub-namespaces for logical grouping
ShopApp.Config = ShopApp.Config || {};
ShopApp.Modules = ShopApp.Modules || {};
ShopApp.Utils = ShopApp.Utils || {};

module.exports = ShopApp;
