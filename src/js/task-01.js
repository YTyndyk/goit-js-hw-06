
const categoriesNumberEl = document.querySelector("#categories");
console.log("Number of categories:", categoriesNumberEl.children.length);

const arrayEl = document.querySelectorAll('li.item');
arrayEl.forEach(element => {
    
const categoryEl = element.firstElementChild.textContent;
console.log('Category:', categoryEl);

const numbersEl = element.querySelector('h2');
console.log('Elements:', numbersEl.nextElementSibling.children.length);
});
