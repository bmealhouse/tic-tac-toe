let turn = 1;
let player = "two";
let symbol = "X";
document.addEventListener("click", (event) => {
  // console.log("chloe", event.target.dataset.box);
  if (turn % 2) {
    player = "one";
    symbol = "O";
  }

  document.getElementsByTagName(
    "h1"
  ).innerHTML = `tic-tac-toe – player ${player} – choose box`;

  event.target.innerHTML = symbol;
  turn = turn + 1;
});
