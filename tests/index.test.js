import  Ship  from '../src/apps/ship.js';
import GameBoard from '../src/apps/gameBoard.js';



describe('gameBoard', () => {
    let gameBoard;

    beforeEach(() => {
        gameBoard = new GameBoard();
    })

    describe('addShip', () => {
        it('should add a ship to the board', () => {
            const ship = new Ship(5);
            gameBoard.addShipY(3, 4, 5);

            expect(gameBoard.board[3][4]).toEqual(ship);
            expect(gameBoard.ship.length).toBe(1);
        })
    })

    describe('receiveAttack', () => {
        it('should return true if ship is hit', () => {
            gameBoard.addShipX(3, 4, 5);

            const ship = gameBoard.receiveAttack(3, 4);
      
            expect(ship.hit_count).toBe(1);
            expect(gameBoard.hits.length).toBe(1);
        })

        it('should return missed if ship is not hit', () => {
            gameBoard.addShipY(3, 4, 5);
            const ship = gameBoard.receiveAttack(4, 4);
    
            expect(ship).toBeNull();
            expect(gameBoard.missed.length).toBe(1);
        })
        
        it('should return null if there is no ship at the specified location', () => {
            const result = gameBoard.receiveAttack(3, 4);
    
            expect(result).toBeNull();
        })
    })

    describe('allShipsSunk', () => {
        it('should report all ships sunk when all ships have been sunk', () => {
            gameBoard.addShipY(3, 4, 5);
            
            gameBoard.receiveAttack(3, 4);
            gameBoard.receiveAttack(3, 5);
            gameBoard.receiveAttack(3, 6);
            gameBoard.receiveAttack(3, 7);
            gameBoard.receiveAttack(3, 8);

            expect(gameBoard.missed.length).toBe(0);
            expect(gameBoard.hits.length).toBe(5);
            expect(gameBoard.ship.length).toBe(1);
            expect(gameBoard.allShipsSunk()).toBe(true);
        })
      
    })
})

    