import  GameBoard  from '../apps/gameBoard.js';
import Ship from './ship.js';

const battleship = new Ship('battleship', 4)
const carrier = new Ship('carrier', 5)
const cruiser = new Ship('cruiser', 3)
const  destroyer = new Ship('destroyer', 2)
const  submarine = new Ship('submarine', 3)
const battleships = [destroyer, submarine, cruiser, battleship, carrier];

let playerBoard = new GameBoard('player');
let computerBoard = new GameBoard('computer');

let gameOver = false;
let playerTurn;
let notDropped;
let draggedShip;
// Flips the ship vertically or horizontally
let angle = 0;
function flip() {
  const shipOptionContainer = document.querySelector('.ship-options');
  const shipOptions = Array.from(shipOptionContainer.children);
 
  if(angle === 0) {
    angle = 90;
  }
  else {
    angle = 0;
  }

  shipOptions.forEach( ship => {
    ship.style.transform = 'rotate(' + angle + 'deg)';
  })
}

// Create board for player and computer
function createBoard(grid, player) {
  const boardContainer = document.querySelector('.game-board-container');

  const board = document.createElement('div');
  // board.classList.add('game-board');
  board.id = player;

  for(let i = 0; i < grid * grid; i++) {
    const square = document.createElement('div');
    square.style.border = '1px solid whitesmoke';
    square.classList.add('square');
    square.id = i;
    
    board.appendChild(square);
  }
  boardContainer.appendChild(board);
}


// Place ships function
function placeShip(ship, user, startId) {
  const playersBoardDiv = document.querySelectorAll(`#${user} div`);
  const gameBoardState = user === 'player' ? playerBoard : computerBoard;
  let width = 10;
  let randomIndex = Math.floor(Math.random() * 10 * 10);
  let isHorizontal = user === 'player' ? angle === 0 : Math.random() < 0.5; // randomly choose horizontal or vertical
  let startIndex = startId ?  parseInt(startId, 10) : randomIndex;

  // make sure the ship doesn't go off the board
  let validPosition;
  if(isHorizontal) {
    // Check if ship would cross the right boundary
    const rowNumber = Math.floor(startIndex / width);
    const rowEndIndex = (rowNumber + 1) * width - 1;
    
    // If ship would cross boundary, move it back
    if (startIndex + ship.length - 1 > rowEndIndex) {
        validPosition = rowEndIndex - ship.length + 1;
    } else {
        validPosition = startIndex;
    }
  } 
  else { // vertical logic remains the same
    if(startIndex <= width * width - width * ship.length) {
        validPosition = startIndex;
    } else {
        validPosition = startIndex - ship.length * width + width;
    }
  }

  // place ship on board and add to ships array
  let shipSquares = [];
  for (let i = 0; i < ship.length; i++) {
    if (isHorizontal) {
     shipSquares.push(playersBoardDiv[validPosition + i])
    } else {
     shipSquares.push(playersBoardDiv[validPosition + i * width])
    }
    
  }
 
  // place ship on board and add to ships array
  for (let i = 0; i < ship.length; i++) {
    if (isHorizontal) {
     shipSquares.push(playersBoardDiv[validPosition + i])
    } else {
     shipSquares.push(playersBoardDiv[validPosition + i * width])
    }
    
  }

  // check if the ship is on top of another ship
  let notOverlay;
  if(isHorizontal) {
   shipSquares.every((_shipDiv, index) => {
       notOverlay =shipSquares[0].id % width !== width - (gameBoardState.ships.length - (index + 1));
    })
  }
  else {
   shipSquares.every( (_shipDiv, index) => {
      notOverlay =shipSquares[0].id < 90 + (width * index + 1);
    })
  }

  const notTaken =shipSquares.every( shipDiv => {
    return !shipDiv.classList.contains('ship');
  })
 
  if(notOverlay && notTaken) {
     // Update the GameBoard instance
     gameBoardState.ships.push(ship);
    // give the ships class
   shipSquares.forEach( shipDiv => {
      shipDiv.classList.add(`${ship.name}`);
      shipDiv.classList.add('ship');
      // shipDiv.setAttribute('draggable', 'false');
      
      // Add a dragstart prevention handler
      shipDiv.addEventListener('mousedown', (e) => {
        if(shipDiv.classList.contains('ship')) {
            e.preventDefault();
            return false;
        }
      });
     })    
  }
  else {
    if(user === 'computer') {
      placeShip(ship, user);
    }
    if(user === 'player') {
      notDropped = true;
    }
  }
 
}

// Restart game function
function restartGame() {
  const displayInfo = document.querySelector('.info');
  const gameBoardContainer = document.querySelector('.game-board-container');
  const shipOptionContainer = document.querySelector('.ship-options');
  // Reset message
  displayInfo.textContent = ' Game has been restarted.';  

  // Reset variables
  playerTurn = undefined;
  draggedShip = undefined;
  gameOver = false;
  angle = 0;
  
  // Reset GameBoard instances
  playerBoard = new GameBoard('player');
  computerBoard = new GameBoard('computer');

  // clear existing game board
  gameBoardContainer.innerHTML = '';
  // create new game board
  createBoard(10, 'player');

  // Restore ship options (you'll need to recreate the ship elements)
  shipOptionContainer.innerHTML = `
    <div id="0" class="destroyer destroyer-preview" draggable="true"></div>
    <div id="1" class="submarine submarine-preview" draggable="true"></div>
    <div id="2" class="cruiser cruiser-preview" draggable="true"></div>
    <div id="3" class="battleship battleship-preview" draggable="true"></div>
    <div id="4" class="carrier carrier-preview" draggable="true"></div>
  `;

  // Re-add event listeners
  const playerBoardDiv = document.querySelectorAll('#player');
  playerBoardDiv.forEach(square => {
    square.addEventListener('dragover', dragOver);
    square.addEventListener('drop', dropShip);
  });

  const shipOptions = Array.from(shipOptionContainer.children);
  shipOptions.forEach(ship => {
    ship.addEventListener('dragstart', dragShip);
  });
}

function startGame() { 
  if(playerTurn === undefined){
    const computerBoardSquare = document.querySelectorAll('#computer div');
    const displayInfo = document.querySelector('.info');
    playerTurn = true;

    battleships.forEach( ship => { placeShip(ship, 'computer');})
    displayInfo.textContent = ' Player turn...';
    computerBoardSquare.forEach( square => {
      square.addEventListener('click', handlePlayerAttack)
    })
    
  }
}

// attack function 
function handlePlayerAttack(e) {
  const displayInfo = document.querySelector('.info');
  if(playerBoard.allShipsSunk()) {
    displayInfo.textContent = ' You won!';
    gameOver = true;
  } else if(computerBoard.allShipsSunk()) {
    displayInfo.textContent = ' You lost!';
    gameOver = true;
  }
   
  if(!gameOver && playerTurn) {
  
    if(e.target.classList.contains('ship')) {
      e.target.classList.add('hit');
      e.target.style.backgroundColor = 'red';
      let classes = Array.from(e.target.classList);
      classes = classes.filter( className => className !== 'ship');
      classes = classes.filter( className => className !== 'square');
      classes = classes.filter( className => className !== 'hit');
      playerBoard.hits.push(...classes);
    
      const hitShip = playerBoard.ships.find( ship => ship.name === classes[0]);
      hitShip.hit();
      const sunkMessage = playerBoard.CheckAttack('player', playerBoard.hits, hitShip);
      if (sunkMessage) {
        displayInfo.textContent = sunkMessage;
        if(playerBoard.allShipsSunk()) {
          displayInfo.textContent = ' You won!';
          gameOver = true;
        } 
      } else {
         displayInfo.textContent = ' You hit a ship!';
      }
    }
    else {
      e.target.classList.add('miss');
      displayInfo.textContent = ' You missed!'; 
    }
    playerTurn = false;
  }
  
    // Remove event listeners to prevent multiple clicks
  const computerBoardSquares = document.querySelectorAll('#computer div');
  computerBoardSquares.forEach( square => {
  square.replaceWith(square.cloneNode(true));
  })
    // Wait 2 seconds before starting computer's turn
    setTimeout(() => handleComputerAttack(), 1000);
    
}

function handleComputerAttack() {

  const displayInfo = document.querySelector('.info');
  const width = 10;
   
  if(!gameOver && !playerTurn) {
    displayInfo.textContent = ' Computer turn...';
    setTimeout(() => {    
      let randomAttack;
      const playerBoardSquares = document.querySelectorAll('#player div');

      do {
        randomAttack = Math.floor(Math.random() * width * width);
      } while (playerBoardSquares[randomAttack].classList.contains('hit') ||
       playerBoardSquares[randomAttack].classList.contains('miss')
      );

      if(playerBoardSquares[randomAttack].classList.contains('ship')) {
        playerBoardSquares[randomAttack].classList.add('hit');
        let classes = Array.from(playerBoardSquares[randomAttack].classList);
        classes = classes.filter( className => className !== 'ship');
        classes = classes.filter( className => className !== 'square');
        classes = classes.filter( className => className !== 'hit');
        computerBoard.hits.push(...classes);
      
        const hitShip = computerBoard.ships.find( ship => ship.name === classes[0]);
        hitShip.hit();
        const sunkMessage = computerBoard.CheckAttack('player', computerBoard.hits, hitShip);
        if (sunkMessage) {
          if(computerBoard.allShipsSunk()) {
            displayInfo.textContent = ' You lost!';
            gameOver = true;
          }
          return displayInfo.textContent = sunkMessage;

        } else {
          displayInfo.textContent = ' Computer hit a ship!';
        }

      } 
      else {
        playerBoardSquares[randomAttack].classList.add('miss');
        displayInfo.textContent = ' Computer missed!';
      }

      if(computerBoard.allShipsSunk()) {
        displayInfo.textContent = ' You lost!';
        gameOver = true;
      }
       
      setTimeout(() => {
        displayInfo.textContent = ' Player turn...';
        const computerBoardSquare = document.querySelectorAll('#computer div');
        computerBoardSquare.forEach( square => {square.addEventListener('click', handlePlayerAttack)})
         playerTurn = true;
         if(gameOver) restartGame();
      }, 1000);   
    }, 1000); 
  } 
}

// drag and drop function
function dragShip(e) {
  // Only allow dragging if the ship is not already placed
  if (!e.target.classList.contains('ship')) {
    draggedShip = e.target;
    notDropped = false;
  } else {
      e.preventDefault();
      return false;
  }
}

function dropShip(e) {
   // If no valid ship is being dragged, don't proceed
   if (!draggedShip || !draggedShip.parentElement?.classList.contains('ship-options')) {
    return;
}
  const startId = e.target.id;
  const ship = battleships[draggedShip.id];

  placeShip(ship, 'player', startId);
  const playersBoardDiv = document.querySelectorAll('#player .square'); // Select all squares
  playersBoardDiv.forEach((div) => div.classList.remove('valid-hover')); // Clear any existing hover classes

  if(!notDropped) {
    draggedShip.remove();
  }
}

function dragOver(e) {
  e.preventDefault();
  const ship = battleships[draggedShip.id];

  //-- MAKE A COOL HOVER EFFECT WHEN SHIP IS BEING DRAGGED OVER THE BOARD --//
  const width = 10;
  const playersBoardDiv = document.querySelectorAll('#player .square'); // Select all squares
  playersBoardDiv.forEach((div) => div.classList.remove('valid-hover')); // Clear any existing hover classes

  if(e.target && e.target.classList.contains('square')) {
    
    const startIndex = parseInt(e.target.id, 10); // Convert square ID to number
    const isHorizontal = angle === 0; // Determine orientation based on current angle
    
    // Calculate and apply hover effect for the ship's length
    for (let i = 0; i < ship.length; i++) {
      const hoverIndex = isHorizontal 
        ? startIndex + i 
        : startIndex + i * width; // Calculate index for horizontal/vertical placement
      
      const hoverSquare = playersBoardDiv[hoverIndex];
    
      // Ensure the hoverIndex is valid and within bounds
     
      if (isHorizontal) {
        // For horizontal ships: check if squares are in the same row
        if (hoverSquare && 
            Math.floor(startIndex / width) === Math.floor(hoverIndex / width)) {
            hoverSquare.classList.add('valid-hover');
        }
      } else {
        // For vertical ships: check if it's within board bounds
        if (hoverSquare && hoverIndex < width * width) {
            hoverSquare.classList.add('valid-hover');
        } 
      }
    }
  }
}

export { flip, createBoard, startGame, dragShip, dropShip, dragOver, restartGame };