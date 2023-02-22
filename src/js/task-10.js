const numberRef = document.querySelector("input");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const boxesEl = document.querySelector("#boxes");

btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
	amount = numberRef.value;

	const basicSize = 30;

	for (let i = 0; i < amount; i += 1) {
		const size = basicSize + i * 10;
		const divEl = document.createElement("div");

		divEl.style.cssText = `width: ${size}px; height: ${size}px`;
		divEl.style.backgroundColor = getRandomHexColor();
		boxesEl.append(divEl);
	}
}

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function destroyBoxes() {
	boxesEl.textContent = "";
	numberRef.value = null;
}
