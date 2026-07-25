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

---

## Build "Check off item" feature

**Note:** This entry is reconstructed rather than verbatim — a one-time exception, since the feature was built in Cursor before prompt-by-prompt logging was formalized in CLAUDE.md. Going forward, entries are logged verbatim as they happen, including any clarifying question Claude asks and the answer given (per the Reverse Prompting rule).

**Prompt:**
> Now implement the "Check off item" feature: clicking an item in the checklist
> should mark it as checked off, and clicking it again should un-mark it. Keep
> it scoped to just this — no other functionality.

**What it produced:** Added a click event listener to each new `<li>` inside `addItem()` in `script.js` that toggles a `checked` class on the clicked item. Added matching CSS in `style.css`: `#checklist li` gets `cursor: pointer`, and `#checklist li.checked` applies `text-decoration: line-through` and gray (`#888`) text.

**Notes:** Scoped to check-off only, per Builder Loop.

---

## Verify "Check off item" feature before committing

**Prompt (Agent Verification Loop):**
> Claude stated expected outcome: clicking an item adds strikethrough + gray
> text; clicking it again removes both; other items are unaffected; no
> console errors either direction.
>
> User response: "The check off feature has been checked and verified"

**What it produced:** Confirmed in-browser — clicking toggles strikethrough/gray text on and off as expected, independently per item, no console errors — before treating the feature as verified and ready to commit.

**Notes:** First use of the Agent Verification Loop (CLAUDE.md addition) — Claude's stated expected outcome is logged alongside the user's confirmation, not just the confirmation alone.

---

## Clarifying question — scope of "View list" feature

**User's question:**
> Right now items display automatically because of how "Add item" works —
> is that sufficient to count as the required "View list" feature on its own,
> or does Next Chapter's spec expect something more deliberate, like a
> dedicated view/count/empty-state, before I can commit and document it as
> its own completed feature?

**Claude's answer:** Auto-display alone isn't enough to count as its own feature — the Planning Worksheet already lists Add / Check off / View as three separate Required Features and frames the Smallest Demo as three sequential steps. Recommended keeping "View" small but deliberate: a live item count (e.g. "3 items, 1 checked") and/or an empty-state message ("No items yet — add a tool or part above"), so it has its own scoped, verifiable before/after state rather than riding on "Add item."

**Notes:** First use of the Reverse Prompting rule (CLAUDE.md addition) — question and answer logged together.

---

## Build "View list" feature

**Prompt:**
> Build the "View list" feature — the third required feature (Add item and
> Check off item are already built and committed). Add a live count that
> updates automatically: total items, packed count, and remaining count,
> formatted like "3 items · 1 packed · 2 remaining." When the list has zero
> items, show an empty-state message instead: "No items yet — add a tool or
> part above." State your expected behavior before I test it in the browser.

**What it produced:** Added `#checklist-status` `<p>` in `index.html`. Added `updateChecklistStatus()` in `script.js`, which shows an empty-state message when there are zero items, otherwise "N items · N packed · N remaining." Called it after every add and every check-off toggle, plus once on page load. Added a small `#checklist-status` style rule in `style.css`.

**Notes:** Third and final required feature per the Planning Worksheet.

---

## Verify "View list" feature before committing

**Prompt (Agent Verification Loop):**
> Claude stated expected outcome: empty-state message at zero items; count
> updates correctly on add; count updates correctly on check-off toggle in
> both directions; no console errors.
>
> User response: "Tested it, matches your expected outcome, no console errors"

**What it produced:** Confirmed in-browser — status line matched expected text at every step (empty state, after adds, after check/uncheck), no console errors — before treating the feature as verified and ready to commit.

**Notes:** All three required features (Add item, Check off item, View list) are now built and verified.

---

## Light CSS pass (styling only, no functional changes)

**Prompt:**
> Do a light CSS pass only — no functional changes. Add reasonable padding
> around the container, spacing between elements, a border-radius on the
> input and button, and one accent color used consistently (e.g. for the
> Add button and the status count). Keep it simple and clean, not
> decorative. This is a styling-only change — do not touch script.js.

**What it produced:** Added a `--accent` CSS variable (`#2563eb`), applied to the "Add Item" button background and the `#checklist-status` text color. Centered `main` as a max-width container with more generous padding. Added flex layout + gap between the input and button, margin-bottom spacing between sections and list items, and `border-radius: 6px` on both the input and button. No changes to `index.html` or `script.js`.

**Notes:** Per the Scope guard rule, this is a formatting-only change and doesn't require the full per-commit checklist (no docstrings, no README update, no CODE_BREAKDOWN.md update needed) — just this lighter prompt-history entry.

---

## Second CSS pass — centering + empty-state look (styling only)

**Prompt:**
> One more light CSS pass, styling only — no functional changes, don't touch
> script.js. Center everything on the page: title, the input/button row, the
> status count, the item list, and the footer line should all be centered and
> aligned within a single max-width container (around 500-600px), not left-
> justified or pushed to one side. Add some top margin so it's not flush to
> the browser edge, and a bit more spacing between sections. Change the
> empty-state message so it doesn't look like a clickable link — muted gray
> or italic instead of blue.

**Flagged conflict:** CSS alone can't distinguish the empty-state text from the live-count text on `#checklist-status` — both were the same element with no class to hook a different color to. Asked whether to allow a 1-line `script.js` change (a class toggle) or keep both states styled identically. User chose to allow the 1-line change.

**What it produced:** Wrapped `header`/`main`/`footer` in a new `.page` container in `index.html` (structural markup only, no new functionality) so they share one centered max-width column (550px, `margin: 2.5rem auto 0`). Set `body { text-align: center }`. Added `justify-content: center` to `#add-item-section`, a max-width on `#item-input` so it doesn't stretch full width, `list-style-position: inside` on `#checklist` so bullets center with the text, and increased margin/padding for spacing between sections. Added `#checklist-status.empty` rule (muted gray, italic). In `script.js`, added one line inside `updateChecklistStatus()`: `checklistStatus.classList.toggle('empty', total === 0)`.

**Notes:** Formatting-only per Scope guard, aside from the one flagged/approved JS line. No docstring changes needed since the toggle line doesn't change `updateChecklistStatus()`'s documented purpose/inputs/outputs/flow.
