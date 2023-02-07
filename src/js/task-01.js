
const categoriesEl = document.querySelector("#categories");
console.log("Number of categories:", categoriesEl.children.length);

const arrayEl = document.querySelectorAll('li.item');
arrayEl.forEach(element => {
const navEl = document.querySelectorAll(".item");
    
const firstnavEl = element.firstElementChild.textContent;
console.log('Category:', firstnavEl);

const nextEl = element.querySelector('h2');
console.log('Elements:', nextEl.nextElementSibling.children.length);
});
