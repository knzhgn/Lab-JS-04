# Refactoring Documentation — Lab 4.2

## What Was Changed and Why

| Before | After | Pattern Applied |
|--------|-------|----------------|
| `var taxRate = 0.08` (global) | `const TAX_RATE = 0.08` in config module | Module Pattern (Ch. 7) |
| `function Product(...)` | `class Product { #price; }` | ES6 Classes (Ch. 5) |
| `Cart.prototype.getTax = function()` reads global `taxRate` | `getTax()` uses `this.#taxRate` (injected) | Dependency Injection |
| All code in one file | Separate modules under `ShopApp.*` namespace | Namespace Pattern (Ch. 11) |

## How Module Pattern Solves the Anti-Patterns
- **Global Pollution**: All state is inside IIFE closures — nothing leaks to global scope
- **Tight Coupling**: Cart receives `taxRate` via constructor, not global variable
- **Prototype Mutation**: ES6 `class` syntax defines all methods in one block

## Namespace Structure
```
ShopApp
├── Config      (initialized but unused — ready for future settings)
├── Modules
│   └── Cart    (Product, Cart classes)
└── Utils
    └── Formatting  (formatCurrency, formatCartSummary)
```
