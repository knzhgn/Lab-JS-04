# Lab 4.1: Anti-Pattern Identification

## Anti-Pattern 1: Global Namespace Pollution
**Location:** `var taxRate = 0.08; var currency = "USD";` (top-level globals)  
**Anti-Pattern Name:** Global Namespace Pollution (Ch. 4, "Anti-Patterns in JavaScript")  
**Why it's an anti-pattern:** Defines variables in the global context, risking naming conflicts with other scripts.  
**Problems caused:** Any script can overwrite `taxRate` or `currency`, silently corrupting calculations.  
**Impact:** High maintainability risk; impossible to safely use in multi-script environments.

## Anti-Pattern 2: Constructor Functions Instead of Classes
**Location:** `function Product(id, name, price) { this.id = id; ... }`  
**Anti-Pattern Name:** Pre-ES6 Constructor Pattern (context-dependent anti-pattern, Ch. 4)  
**Why it's an anti-pattern:** In modern JavaScript (ES6+), using constructor functions instead of `class` syntax reduces readability and makes inheritance error-prone.  
**Problems caused:** No enforced `new` usage; `this` binding issues without `new`.  
**Impact:** Medium — works but violates modern best practices.

## Anti-Pattern 3: Prototype Mutation for Method Addition
**Location:** `Cart.prototype.addItem = function(...) {...};`  
**Anti-Pattern Name:** Prototype Manipulation Anti-Pattern (Ch. 4)  
**Why it's an anti-pattern:** Adding methods to `.prototype` outside the constructor definition creates fragmented, hard-to-read code.  
**Problems caused:** Methods are scattered across the file; not immediately visible as part of Cart.  
**Impact:** Medium — reduces code readability and maintainability.

## Anti-Pattern 4: Tight Coupling (Display + Logic)
**Location:** Cart methods directly depend on global `taxRate`  
**Anti-Pattern Name:** Tight Coupling (Ch. 4, "Anti-Patterns in JavaScript")  
**Why it's an anti-pattern:** Cart's `getTax()` directly reads the global `taxRate` variable rather than receiving it as a parameter.  
**Problems caused:** Cannot test `getTax()` with different rates without mutating global state.  
**Impact:** High — makes testing and reuse impossible.

## Anti-Pattern 5: Magic Numbers / Hardcoded Configuration
**Location:** `var cart = new Cart(); var p1 = new Product(1, "Widget", 10.99);` hardcoded inline  
**Anti-Pattern Name:** Hardcoded Values (Technical Debt, Ch. 4)  
**Why it's an anti-pattern:** Configuration values scattered in code rather than centralized.  
**Problems caused:** Changing tax rates or currency requires hunting through code.  
**Impact:** Medium — accumulates technical debt over time.
