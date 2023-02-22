const counter = {
	counterValue: 0,

	decrement() {
		this.counterValue -= 1;
	},
	increment() {
		this.counterValue += 1;
	},
};

const decrementEl = document.querySelector('button[data-action="decrement"');
const incrementEl = document.querySelector('button[data-action="increment"');
const valueEl = document.querySelector("#value");

decrementEl.addEventListener("click", function () {
	counter.decrement();
	valueEl.textContent = counter.counterValue;
});

incrementEl.addEventListener("click", function () {
	counter.increment();
	valueEl.textContent = counter.counterValue;
});
