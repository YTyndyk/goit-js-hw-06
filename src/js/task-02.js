const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listEl = ingredients.map(element =>{
  const itemEl = document.createElement('li');
itemEl.textContent = element;
itemEl.classList.add('item');
return itemEl;

});
console.log(listEl);
const list = document.querySelector('ul');
list.append(...listEl);
