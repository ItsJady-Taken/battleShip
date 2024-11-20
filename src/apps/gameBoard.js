import Ship from '../apps/ship.js';

class GameBoard {
    constructor() {
        this.board = new Array(10).fill(null).map(() => new Array(10).fill(null));
        this.ships = [];
        this.hits = [];
        this.missed = [];
    }
    addShipX(x, y, length) {
        // Create a new ship instance with the given length
        const ship = new Ship(length);

        // // Add the ship horizontally, to the board at a specified location
        for (let i = 0; i < length; i++) {
            this.board[x][y + i] = ship; 
        }

        // store the ship in the ship array, for later use
        this.ships.push(ship);
    }

    addShipY(x, y, length) {
        // Create a new ship instance with the given length
        const ship = new Ship(length);

        // // Add the ship vertically, to the board at a specified location
        for (let i = 0; i < length; i++) {
            this.board[x + i][y] = ship; 
        }

        // store the ship in the ship array, for later use
        this.ships.push(ship);
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

    allShipsSunk() {
        return this.ships.every(ship => ship.isSunk());
    }

    reset() {
        this.board = new Array(10).fill(null).map(() => new Array(10).fill(null));
        this.ships = [];
        this.hits = [];
        this.missed = [];
      
    }

    removeShip() {
        this.ships = this.ships.filter((ship) => {
            if (ship.isSunk()) {
                // Remove ship from the board grid
                for (let x = 0; x < this.board.length; x++) {
                    for (let y = 0; y < this.board[x].length; y++) {
                        if (this.board[x][y] === ship) {
                            this.board[x][y] = null;
                        }
                    }
                }
                console.log(`Ship removed: Length = ${ship.length}, HitCount = ${ship.hitCount}`);
                return false; // Filter out the ship
            }
            return true; // Keep the ship
        });
    }

}

export default GameBoard;