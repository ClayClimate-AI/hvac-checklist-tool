# Prompt History — HVAC Tool & Parts Checklist

A log of the actual prompts used to build this project, in order.

---

## Scaffold file structure

**Prompt:**
> Context: I'm building a small HVAC tool/parts checklist app for HVAC techs — my
> admissions project for Next Chapter. This is based on a real problem: work orders
> often don't match what's actually needed on-site, causing wasted trips back to
> the warehouse.
>
> Constraint: HTML, CSS, and vanilla JavaScript only — no frameworks, no database,
> no backend.
>
> Objective for this session: scaffold the file structure only — index.html,
> style.css, script.js — with a basic page shell. No functionality yet.

**What it produced:** Created `index.html` (page shell with header, main with placeholder `add-item-section` and `checklist-section`, footer), `style.css` (box-sizing reset, basic layout spacing), `script.js` (empty, comment marker only).

**Notes:** Opened `index.html` in browser to confirm it loads clean with no console errors before committing as commit #1.

---

## Verify scaffold loads clean before committing

**Prompt:**
> Lets go ahead and open index.html in the browser to confirm it loads clean.

**What it produced:** Opened `index.html` in the default browser for a manual check — header, empty middle section, and footer rendering with no console errors, before treating the scaffold as ready for commit #1.

**Notes:** Verifying before every commit, not just at the end, so problems get caught at the step that introduced them.

---

## Build "Add item" feature

**Prompt:**
> Now implement the "Add item" feature: a text input and button that adds the
> typed value as a new item to a visible list. Keep it scoped to just this —
> no checkbox functionality yet.

**What it produced:** Added a text input (`#item-input`) and "Add Item" button (`#add-item-btn`) inside `add-item-section`, and a `<ul id="checklist">` inside `checklist-section` in `index.html`. Added `script.js` logic: `addItem()` reads the trimmed input value, appends it as a new `<li>` to the checklist, clears the input, and refocuses it. Wired to both the button click and pressing Enter in the input.

**Notes:** Deliberately left check-off/strikethrough logic out — scoped to add-only, per Builder Loop (one feature at a time, verify, then commit).

---

## Verify "Add item" feature before committing

**Prompt:**
> Verified that items append to list and text input field clears, additionally
> no console errors in the browser tools.

**What it produced:** Manual verification in-browser: typed values append as new `<li>` items via both the "Add Item" button click and pressing Enter, input field clears and refocuses after each add, and no console errors — confirming the feature works as scoped before committing.

**Notes:** Verify-before-commit step per Builder Loop.
