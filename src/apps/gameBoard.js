import Ship from '../apps/ship.js';

class GameBoard {
    constructor() {
        this.board = new Array(10).fill().map(() => new Array(10).fill(null));
        this.ship = []
        this.hit = []
    }
    addShip(x, y, length) {
         // Create a new ship instance with the given length
        const ship = new Ship(length);

        // Add the ship to the board at a specified location
        this.board[x][y] = ship;    

        // store the ship in the ship array, for later use
        this.ship.push(ship);
    }
}

export default GameBoard;