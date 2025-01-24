import './styles/main.scss';

import { flip, createBoard, startGame, dragShip, dragOver, dropShip, restartGame } from './apps/domModules.js';

const shipOptionContainer = document.querySelector('.ship-options');
const shipOptions = Array.from(shipOptionContainer.children);
const displayInfo = document.querySelector('.info');
const gameBoardContainer = document.querySelector('.game-board-container');
const startBtn = document.querySelector('.start-button');
const resetBtn = document.querySelector('.reset-button');

// Load the DOM
document.addEventListener('DOMContentLoaded', () => {
    createBoard(10, 'player');

    // drag and drop ships on to player board
    const playerBoardDiv = document.querySelectorAll('#player');
    playerBoardDiv.forEach( square => {
        square.addEventListener('dragover', dragOver)
       
        square.addEventListener('drop', dropShip)
    })  


});

// With a function to dynamically get current ship options
function getShipOptions() {
    return Array.from(document.querySelector('.ship-options').children);
}

// Event listeners for flipping the ships
const flipShipBtn = document.querySelector('.flip-ship-button');
flipShipBtn.addEventListener('click', flip);


// drag the ships
shipOptions.forEach( ship => {
    ship.addEventListener('dragstart', dragShip)
})

// start the game
startBtn.addEventListener('click', () => {
    if(gameBoardContainer.children.length === 1) {
         // if all ships is not on the player board 
         if(getShipOptions().length != 0) {
            displayInfo.textContent = ' Please place all your ships on to the board to start the game!';
          }
        else {
            createBoard(10, 'computer');
            startGame();
        }
    } 
});


// reset the game
setTimeout(resetBtn.addEventListener('click', restartGame), 1000);
