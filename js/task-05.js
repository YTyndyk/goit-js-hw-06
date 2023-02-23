const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

inputEl.addEventListener("input", onInputEnter);

function onInputEnter(event) {
	spanEl.textContent = event.currentTarget.value;
	if (event.currentTarget.value.trim() === "") {
		spanEl.textContent = "Anonymous";
	}
}
