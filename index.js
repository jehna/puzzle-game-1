import "./style.scss";

const DEBUG = true;
const initiallyChecked = [1, 1, 0, 0, 0, 1];

const board = document.getElementById("board");
for (let i = 0; i < initiallyChecked.length; i++)
  board.appendChild(createInput(i, initiallyChecked[i] === 1));

function createInput(index, isChecked) {
  const input = document.createElement("input");
  input.type = "checkbox";
  input.name = "r" + index;
  input.checked = isChecked;
  input.id = "r" + index;
  return input;
}

document
  .getElementById("r5")
  .addEventListener("change", () => alert("success!"));
