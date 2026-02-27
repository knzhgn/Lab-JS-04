# Impact Assessment

| Anti-Pattern | Severity | Maintainability | Scalability | Performance | Team Impact |
|---|---|---|---|---|---|
| Global Namespace Pollution | CRITICAL | Very Low | Very Low | No impact | High conflict risk |
| Prototype Mutation | MEDIUM | Low | Medium | No impact | Confusion for new devs |
| Tight Coupling | HIGH | Low | Low | No impact | Hard to test/mock |
| Constructor Functions | MEDIUM | Medium | Medium | No impact | Code style inconsistency |
| Hardcoded Values | LOW | Medium | Low | No impact | Config changes require devs |

### Priority Order (Critical → Low)
1. **CRITICAL** — Global Namespace Pollution (immediate risk of runtime conflicts)
2. **HIGH** — Tight Coupling (blocks testing and feature reuse)
3. **MEDIUM** — Prototype Mutation (reduces readability)
4. **MEDIUM** — Constructor Functions (modern JS best practice violation)
5. **LOW** — Hardcoded Values (technical debt, low urgency)

Ch. 4: "Knowledge of anti-patterns is critical for success. Once we learn to recognize such anti-patterns, we can refactor our code to negate them so that the overall quality of our solutions improves instantly."
