import  Ship  from '../src/apps/ship.js';
import GameBoard from '../src/apps/gameBoard.js';



it('board should have ', () => {
    const gameBoard = new GameBoard();
    gameBoard.addShip(5, 0, 5);
    expect(gameBoard.board[5][5]).toBeInstanceOf(gameBoard.ship());
});

it('should return true if ship is sunk', () => {
    const ship = new Ship(5);
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);

})