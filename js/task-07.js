const inputControler = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputControler.addEventListener("input", onChangeInputControler);

textEl.style.fontSize = inputControler.value + "px";

function onChangeInputControler() {
	textEl.style.fontSize = inputControler.value + "px";
}
