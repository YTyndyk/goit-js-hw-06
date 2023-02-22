const inputControler = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputControler.addEventListener("input", onChangeInputControler);

function onChangeInputControler(event) {
	textEl.style.fontSize = event.currentTarget.value + "px";
}
