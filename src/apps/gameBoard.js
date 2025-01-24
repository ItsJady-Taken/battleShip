import Ship from '../apps/ship.js';

class GameBoard {
    constructor(player) {
        this.player = player;
        this.ships = [];
        this.hits = [];
        this.sunks = [];
    }
    CheckAttack(player, shipHit, ship) {
        if (!ship) return;

        const hitOnThisShip = shipHit.filter(hitShipName => hitShipName === ship.name).length
        if( hitOnThisShip === ship.length) {
            ship.sunk = true;
           
            this.hits = this.hits.filter(hitShipName => hitShipName !== ship.name);
            this.sunks.push(ship.name);

            return ` ${player} sunk the ${ship.name}!`;
        }
    }
    allShipsSunk() {
        return this.sunks.length === this.ships.length;
    }

}

export default GameBoard;