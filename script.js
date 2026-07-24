// HVAC Tool & Parts Checklist

const itemInput = document.getElementById('item-input');
const addItemBtn = document.getElementById('add-item-btn');
const checklist = document.getElementById('checklist');

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
  });
  checklist.appendChild(li);

  itemInput.value = '';
  itemInput.focus();
}

addItemBtn.addEventListener('click', addItem);
itemInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') addItem();
});
