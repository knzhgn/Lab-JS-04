# AI_REPORT.md

**Student Name:** ____________________  
**Date:** _______  
**Lab(s):** Lab 01 – Lab 06  

---

## 1. AI Tool Used
**Tool:** Claude (Anthropic) — claude.ai  
**Version:** Claude Sonnet 4.6  

---

## 2. How AI Was Used

AI was used to assist with:
- Generating code scaffolding and boilerplate for JavaScript modules
- Formatting markdown documentation files
- Writing GoF-style pattern documentation following the structure from Ch. 3
- Suggesting pattern implementations for Lab 6.2 scenarios

AI was **NOT** used to:
- Select which patterns to apply (analysis was done by the student)
- Make the Rule of Three evaluations in Lab 1.1
- Write the reflections (student's own words)
- Understand or read the textbook chapters

---

## 3. Prompts Used (Summary)

1. "Generate an ES6 class implementation of a Cart with private fields for Lab 5.1"
2. "Write GoF-style documentation for the Module Pattern following Ch. 3 structure"
3. "Create an Observer pattern implementation with subscribe/unsubscribe/publish for a notification system"
4. "Help structure a Singleton with static private fields in ES6"

---

## 4. How AI Output Was Modified and Verified

All AI-generated code was:
1. **Read and understood** before inclusion — no code was used without comprehension
2. **Modified** to match the specific lab scenarios, textbook references, and naming conventions
3. **Tested** by running `node filename.js` to verify console output
4. **Annotated** with additional inline comments explaining the pattern mechanics in the student's own words
5. **Referenced** to specific book chapters and sections (all references verified against the actual textbook)

Documentation was reviewed against Ch. 3's pattern structure criteria and Ch. 6's category definitions to ensure accuracy.

---

## 5. What I Learned from the Process

Working with AI to generate pattern implementations clarified that knowing *which* pattern to use (and *why*) requires genuine understanding of the problem — AI cannot make that decision from a vague problem description. The most valuable part of the labs was the analysis and justification work, not the code generation. The implementations themselves are less important than being able to articulate *why* a Singleton is appropriate for a configuration object, or *why* an Observer is better than a Mediator for a notification system. AI helped with the mechanics; understanding came from reading the textbook.

---

*Submitted in accordance with ALMAU AI usage policy.*
