
import { RealPlayer } from "./player";
import { ComputerPlayer } from "./player";


function createBoard(size) {
    // get the size of the board
    const boardSize = size * size;

    // create the gameboard grid for player and computer 
    const gameBoard = document.querySelectorAll('.gameBoard');
    gameBoard.forEach((board) => {
        board.style.display = 'grid';
        board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        board.style.gridTemplateRows = `repeat(${size}, 1fr)`;


        // create the cells for the gameboard
        for (let i = 0; i < boardSize; i++) {
             const boardCell = document.createElement('div');
            boardCell.classList.add('boardCell');

            board.appendChild(boardCell);
        }
       
    })
    // Start the game when the game, when the start button is clicked
   const startGameBtn = document.getElementById('start-game');
    startGameBtn.addEventListener('click', () => {
        console.log('start game button clicked');
        startGame();
    })
}

function startGame() {
    const player = new RealPlayer();
    const computer = new ComputerPlayer();  

    const playerBoard = player.newBoard;
    const computerBoard = computer.newBoard;

    const numShips = 1;

    const shipLength = 5;

    playerBoard.addShipY(3, 4, shipLength);
    computerBoard.addShipY(3, 4, shipLength);

    const gameBoard = document.querySelectorAll('.gameBoard');  
    gameBoard.innerHTML = '';  
    gameBoard.forEach((board) => {
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
        
            if (playerBoard.board[i][j] !== null && computerBoard.board[i][j] !== null) {
                cell.classList.add('ship');
            }
        
            board.appendChild(cell);
            }
        }
    })
    
}
export { createBoard, startGame };