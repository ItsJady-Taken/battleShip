import Ship from '../apps/ship.js';

class GameBoard {
    constructor() {
        this.board = new Array(10).fill().map(() => new Array(10).fill(null));
        this.ship = [];
        this.hits = [];
        this.missed = [];
    }
    addShipX(x, y, length) {
        // Create a new ship instance with the given length
        const ship = new Ship(length);

        // // Add the ship horizontally, to the board at a specified location
        for (let i = 0; i < length; i++) {
            this.board[x + i][y] = ship; 
        }

        // store the ship in the ship array, for later use
        this.ship.push(ship);
    }

    addShipY(x, y, length) {
        // Create a new ship instance with the given length
        const ship = new Ship(length);

        // // Add the ship vertically, to the board at a specified location
        for (let i = 0; i < length; i++) {
            this.board[x][y + i] = ship; 
        }

        // store the ship in the ship array, for later use
        this.ship.push(ship);
    }


    receiveAttack(x, y) {
        const ship = this.board[x][y];
        if (ship !== null) {
            ship.hit();
            this.hits.push({ x, y });    
        }
        else {
            this.missed.push({ x, y });
        }
        return ship;
    }
    getMissedAttacks() {
        return this.missed;
    }
    allShipsSunk() {
        return this.ship.every(ship => ship.isSunk());
    }
}

export default GameBoard;