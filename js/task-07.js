const inputControler = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputControler.addEventListener("input", onChangeInputControler);

onChangeInputControler();

function onChangeInputControler() {
	textEl.style.fontSize = inputControler.value + "px";
}
