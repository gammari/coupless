const startButton = document.querySelector('.board__button');
const boardTitle = document.querySelector('.board__title');

function createBoard(count, columns) {
    const gameBoard = document.querySelector('.board');
    gameBoard.textContent = ""
}

startButton.addEventListener("click", (event) => {
  event.preventDefault()
  const input = document.querySelector('.board__input');

  let columns = input.value;
  let count;

  if (columns >= 2 && columns <= 6 && columns % 2 == 0) {
    count = columns * columns;
  };

  createBoard(count, columns);
});