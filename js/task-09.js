const btnChangeColor = document.querySelector(".change-color");
const spanRef = document.querySelector(".color");
const bodyRef = document.querySelector("body");

btnChangeColor.addEventListener("click", onBtnClick);

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onBtnClick() {
	const color = (bodyRef.style.backgroundColor = getRandomHexColor());
	spanRef.textContent = color;
}
