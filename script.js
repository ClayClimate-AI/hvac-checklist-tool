// HVAC Tool & Parts Checklist

const itemInput = document.getElementById('item-input');
const addItemBtn = document.getElementById('add-item-btn');
const checklist = document.getElementById('checklist');

function addItem() {
  const value = itemInput.value.trim();
  if (!value) return;

  const li = document.createElement('li');
  li.textContent = value;
  checklist.appendChild(li);

  itemInput.value = '';
  itemInput.focus();
}

addItemBtn.addEventListener('click', addItem);
itemInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') addItem();
});
