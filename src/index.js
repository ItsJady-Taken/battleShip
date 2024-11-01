import './styles/main.scss';
import realPlayer from './apps/player';


import { createBoard, startGame } from './apps/domModules';

document.addEventListener('DOMContentLoaded', () => {
    createBoard(10);
});

// const startGameBtn = document.getElementById('start-game');
// startGameBtn.addEventListener('click', () => {
//     createBoard(10);
// })