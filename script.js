// this will be replaced by getting the data-cell value from the UI
const board = Array.from(Array(10).keys());
const winningCombos = [
  [1, 2, 3],
  [4, 5, 6],
//   [7, 8, 9],
//   [1, 4, 7],
//   [2, 5, 8],
//   [3, 6, 9],
//   [1, 5, 9],
//   [3, 5, 9],
];
winningCombos.forEach(combo => {
    [x, y, z] = combo
    console.log(`${board[x]},${board[y]},${board[z]}` === "4,5,6" )
})

console.log(board);
