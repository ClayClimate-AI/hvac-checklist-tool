// HVAC Tool & Parts Checklist

const itemInput = document.getElementById('item-input');
const addItemBtn = document.getElementById('add-item-btn');
const checklist = document.getElementById('checklist');
const checklistStatus = document.getElementById('checklist-status');

/**
 * Purpose: Keep the status line in sync with the current state of the
 *   checklist — either an empty-state message or a live item count.
 * Inputs: None directly — reads the current `<li>` children of `checklist`.
 * Outputs: Updates the text content of `checklistStatus`. Returns nothing.
 * Flow: Count all `<li>` items and how many have the "checked" class.
 *   If there are no items, show the empty-state message. Otherwise show
 *   "N items · N packed · N remaining".
 */
function updateChecklistStatus() {
  const items = checklist.querySelectorAll('li');
  const total = items.length;

  checklistStatus.classList.toggle('empty', total === 0);

  if (total === 0) {
    checklistStatus.textContent = 'No items yet — add a tool or part above.';
    return;
  }

  const packed = checklist.querySelectorAll('li.checked').length;
  const remaining = total - packed;
  checklistStatus.textContent = `${total} items · ${packed} packed · ${remaining} remaining`;
}

/**
 * Purpose: Add whatever the tech typed into the checklist as a new item.
 * Inputs: None directly — reads the current value of `itemInput`.
 * Outputs: Appends a new checkable `<li>` to `checklist`; clears and
 *   refocuses `itemInput`. Returns nothing.
 * Flow: Trim the input, bail out on empty input, create the `<li>`,
 *   attach its click-to-check-off listener, append it to the list,
 *   then reset the input for the next entry.
 */
function addItem() {
  const value = itemInput.value.trim();
  if (!value) return;

  const li = document.createElement('li');
  li.textContent = value;
  // Purpose: let a tech mark this item as packed/confirmed by clicking it.
  // Inputs: click event on this specific <li>.
  // Outputs: toggles the "checked" class on this <li> (strikethrough via CSS).
  // Flow: each new <li> gets its own listener, so items toggle independently.
  li.addEventListener('click', () => {
    li.classList.toggle('checked');
    updateChecklistStatus();
  });
  checklist.appendChild(li);

  itemInput.value = '';
  itemInput.focus();
  updateChecklistStatus();
}

addItemBtn.addEventListener('click', addItem);
itemInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') addItem();
});

updateChecklistStatus();
