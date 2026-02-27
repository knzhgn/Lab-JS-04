# Anti-Pattern Classification — Ch. 4 "What Are Anti-Patterns?"

| Anti-Pattern | Bad Solution? | Unfavorable Situation | Good Solution |
|---|---|---|---|
| Global Namespace Pollution | YES | Naming conflicts between scripts | Module Pattern (Ch. 7) |
| Constructor Functions | YES (in modern JS) | Fragile `this` binding | ES6 Classes (Ch. 5) |
| Prototype Mutation | YES | Fragmented method definitions | ES6 Class syntax |
| Tight Coupling | YES | Untestable, inflexible code | Dependency injection |
| Hardcoded Values | YES | Config scattered in logic | Config module (Ch. 5) |

### Proposed Solutions
- **Module Pattern** (Ch. 7, "The Module Pattern"): Encapsulate all cart logic, eliminating global variables
- **Namespace Pattern** (Ch. 11): Organize modules under `App.Cart`, `App.Config`
- **ES6 Classes** (Ch. 5): Replace constructor functions and prototype mutations
