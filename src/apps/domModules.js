
import { RealPlayer } from "./player";
import { ComputerPlayer } from "./player";
import  GameBoard  from "./gameBoard";

function createBoard(size) {
    // get the size of the board
    const boardSize = size * size;

    // create the gameboard grid for player and computer 
    const gameBoard = document.querySelectorAll('.gameBoard');
    
    gameBoard.forEach((board) => {
        board.style.display = 'grid';
        board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        board.style.gridTemplateRows = `repeat(${size}, 1fr)`;


        // display the cells for the gameboard
        for (let i = 0; i < boardSize; i++) {
             const boardCell = document.createElement('div');
            boardCell.classList.add('boardCell');

            board.appendChild(boardCell);
        }
       
    })
  const startGameBtn = document.getElementById('start-game');
  const resetGameBtn = document.getElementById('reset-game');
  resetGameBtn.classList.add('disabled');
  // Start the game when the game, when the start button is clicked
  // document.addEventListener('keydown', (event) => {
  //   if (event.key === 'Enter') {
  //     startGame();
  //     startGameBtn.classList.add('disabled');
  //     resetGameBtn.classList.remove('disabled');
  //   }
  // })
  startGameBtn.addEventListener('click', () => {
    startGame();
    startGameBtn.classList.add('disabled');
    resetGameBtn.classList.remove('disabled');
  })

  // Reset the game, when the reset button is clicked
  resetGameBtn.addEventListener('click', () => {
    //------ WORK ON THE RESET FUNCTIONALITY ALSO CONSIDER TO START GAME WHEN PRESING KEY----//
    // const realPlayerBoard = new RealPlayer().board;
    // const ComputerPlayerBoard = new ComputerPlayer().board;
    
    // realPlayerBoard.reset();
    // ComputerPlayerBoard.reset();


    const gameBoard = document.querySelectorAll('.gameBoard');
    gameBoard.forEach((board) => {
        board.innerHTML = '';
    })
    createBoard(size);

    startGame();
    // gameBoard.forEach((board) => {
    //     board.style.display = 'grid';
    //     board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    //     board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    //     // display the cells for the gameboard
    //     for (let i = 0; i < boardSize; i++) {
    //          const boardCell = document.createElement('div');
    //         boardCell.classList.add('boardCell');

    //         board.appendChild(boardCell);
    //     }
       
    // })

    startGameBtn.classList.remove('disabled');
  }) 
   
}

// start the game
function startGame() {
  const playerBoard = new GameBoard();
  const computerBoard = new GameBoard();  
  
  playerBoard.reset();
  computerBoard.reset();

  genaratingShips(playerBoard, computerBoard);
  addShipsUi(playerBoard, computerBoard);

  const compBoard = document.querySelector('.computer');
  const realPlayerBoard = document.querySelector('.player');

  // Taking turns attacking 
  let turn = 'player';

  // Player turn
  compBoard.addEventListener('click', (e) => {
    if (turn === 'player') {
      const cell = e.target;
      const x = cell.dataset.x;
      const y = cell.dataset.y;

      // Check if the cell has already been targeted
      if (cell.classList.contains('hit') || cell.classList.contains('miss')) {
        return;
      }

      // Make the shot
      computerBoard.receiveAttack(x, y);
      console.log(computerBoard.board[x][y]);
      
      // Update the UI
      if (computerBoard.board[x][y] === null) {
        cell.classList.add('miss');
        cell.innerHTML = '<span class="dot" style="background-color: black;"></span>';
      } 
      if(computerBoard.board[x][y] !== null) {
        cell.classList.add('hit');
        cell.innerHTML = '<span class="dot" style="background-color: red;"></span>';
        
      }
     
      // Switch turn to computer
      turn = 'computer';
      // Computer makes a random shot
      const computerX = Math.floor(Math.random() * 10);
      const computerY = Math.floor(Math.random() * 10);

      playerBoard.receiveAttack(computerX, computerY);

      //Update the UI
      const playerCell = realPlayerBoard.querySelector(`[data-x="${computerX}"][data-y="${computerY}"]`);
    
      if (playerBoard.board[computerX][computerY] === null) {
        playerCell.classList.add('miss');
        playerCell.innerHTML = '<span class="dot" style="background-color: black;"></span>';
      } 
      if(playerBoard.board[computerX][computerY] !== null) {
        playerCell.classList.add('hit');
        playerCell.innerHTML = '<span class="dot" style="background-color: red;"></span>';
      }

      playerBoard.removeShip();
      computerBoard.removeShip();

      // Switch turn to player
      turn = 'player';

    }

    // Check if the game is over
  //   if (computerBoard.allShipsSunk()) {
  //     const gameInfo = document.querySelector('.game-info');
  //     gameInfo.innerHTML = 'Player wins';
  //     console.log('player wins');

  //       // Disable the the boards      
  //       compBoard.classList.add('disabled');
  //       realPlayerBoard.classList.add('disabled');

  //       turn = 'player';
  //   }
  //   else if (playerBoard.allShipsSunk()) {
  //     const gameInfo = document.querySelector('.game-info');
  //     gameInfo.innerHTML = 'Computer wins';
  //     console.log('comp wins');

  //     //Disable the the boards
  //     compBoard.classList.add('disabled');
  //     realPlayerBoard.classList.add('disabled');

  //     turn = 'player';
  //   }

  });
}

function addShipsUi(playerBoard, computerBoard) {
  const ships = {
    carrier: {count: 1, length: 5, color: 'purple'},
    battleship: {count: 1, length: 4, color: 'blue'},
    cruiser: {count: 1, length: 3, color: 'green'},
    submarine: {count: 1, length: 3, color: 'yellow'},
    destroyer: {count: 1, length: 2, color: 'orange'},
  };


  const realPlayerBoard = document.querySelector('.player'); 
  const compBoard = document.querySelector('.computer');

  compBoard.innerHTML = '';
  realPlayerBoard.innerHTML = '';

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const playerCell = document.createElement('div');
      playerCell.classList.add('boardCell');
      playerCell.dataset.x = i; // add custom data attribute for x
      playerCell.dataset.y = j; // add custom data attribute for y

      const computerCell = document.createElement('div');
      computerCell.classList.add('boardCell');
      computerCell.dataset.x = i; // add custom data attribute for x
      computerCell.dataset.y = j; // add custom data attribute for y

      if (playerBoard.board[i][j] !== null) {
      
        //get the color of the ship
        const shipType = Object.keys(ships).find(key => ships[key].length === playerBoard.board[i][j].length);
        const shipColor = ships[shipType].color;

        const shipDiv = document.createElement('div');
        shipDiv.dataset.x = i; 
        shipDiv.dataset.y = j;
        
        shipDiv.style.height = '100%'; 
        shipDiv.style.border = `1px solid ${shipColor}`;
        shipDiv.style.boxSizing = 'border-box';
        shipDiv.style.backgroundColor = `${shipColor}`; // Add a border around the ship
        
        // Append the ship div to the real player board
        playerCell.appendChild(shipDiv);
      }
      realPlayerBoard.appendChild(playerCell);

      if (computerBoard.board[i][j] !== null) {
        // Create a blank div for the computer board
        const blankDiv = document.createElement('div');
        blankDiv.dataset.x = i; 
        blankDiv.dataset.y = j;
        blankDiv.style.height = '100%';
        
        // Append the blank div to the computer board
        computerCell.appendChild(blankDiv);
      }
      compBoard.appendChild(computerCell);
    }
  }

}

// function to genarate the ships object
function genaratingShips(playerBoard, computerBoard) {
  const ships = [
    {type: 'carrier', length: 5, color: 'purple'},
    {type: 'battleship', length: 4, color: 'blue'},
    {type: 'cruiser', length: 3, color: 'green'},
    {type: 'submarine', length: 3, color: 'yellow'},
    {type: 'destroyer', length: 2, color: 'orange'},
  ];

  // Shuffle ships array for more randomness
  ships.sort(() => Math.random() - 0.5);

  // Place ships for both boards
  [playerBoard, computerBoard].forEach((board) => {
    ships.forEach(({ length }) => {
        let x, y, orientation;

        // Keep generating random positions until valid
        while (true) {
            orientation = Math.random() < 0.5 ? "x" : "y";
            x = Math.floor(Math.random() * 10);
            y = Math.floor(Math.random() * 10);

            // Adjust random bounds based on orientation to avoid overflow
            if (orientation === "x" && y + length > 10) continue;
            if (orientation === "y" && x + length > 10) continue;

            if (!doesShipOverlap(board, x, y, length, orientation)) {
                break;
            }
        }
       
        // Add the ship to the board
        if (orientation === "x") {
            board.addShipX(x, y, length);
        } else {
            board.addShipY(x, y, length);
        }
    });
  });

}

// Helper function to check if a ship overlaps with any existing ships on the board
function doesShipOverlap(board, x, y, length, orientation) {

  // return true if there is an overlap
  if (orientation === 'x') {
      for (let i = 0; i < length; i++) {
        if (y + i >= 10 || board.board[x][y + i] !== null) {
          return true;
        
          }
      }
  } 
  else {
      for (let i = 0; i < length; i++) {
        if (x + i >= 10 || board.board[x + i][y] !== null) {
          return true;
          }
      }
  }
  return false; // no overlap
}

export { createBoard, startGame };