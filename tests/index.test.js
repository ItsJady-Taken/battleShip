import  Ship  from '../src/apps/ship.js';
import GameBoard from '../src/apps/gameBoard.js';

describe('GameBoard', () => {
    let gameBoard;
  
    beforeEach(() => {
      gameBoard = new GameBoard();
    });
  
    it('should initialize with an empty board', () => {
      expect(gameBoard.board).toEqual(new Array(10).fill(null).map(() => new Array(10).fill(null)));
    });
  
    it('should add a ship to the board', () => {
      const ship = new Ship('Test Ship', 3);
      gameBoard.addShip(ship);
      expect(gameBoard.ships).toContain(ship);
    });
  
    it('should receive an attack and hit a ship', () => {
      const ship = new Ship('Test Ship', 3);
      gameBoard.addShip(ship);
      gameBoard.board[0][0] = ship;
      const result = gameBoard.receiveAttack(0, 0);
      expect(result).toBe(ship);
      expect(ship.hit_count).toBe(1);
    });
  
    it('should receive an attack and miss a ship', () => {
      const result = gameBoard.receiveAttack(0, 0);
      expect(result).toBeNull();
      expect(gameBoard.missed).toContainEqual({ x: 0, y: 0 });
    });
  
    it('should check if all ships are sunk', () => {
      const ship1 = new Ship('Test Ship 1', 3);
      const ship2 = new Ship('Test Ship 2', 3);
      gameBoard.addShip(ship1);
      gameBoard.addShip(ship2);
      ship1.hit_count = 3;
      ship2.hit_count = 3;
      expect(gameBoard.allShipsSunk()).toBe(true);
    });
  
    it('should reset the game board', () => {
      gameBoard.addShip(new Ship('Test Ship', 3));
      gameBoard.receiveAttack(0, 0);
      gameBoard.reset();
      expect(gameBoard.board).toEqual(new Array(10).fill(null).map(() => new Array(10).fill(null)));
      expect(gameBoard.ships).toEqual([]);
      expect(gameBoard.hits).toEqual([]);
      expect(gameBoard.missed).toEqual([]);
    });
  
    it('should remove a sunk ship from the board', () => {
      const ship = new Ship('Test Ship', 3);
      gameBoard.addShip(ship);
      gameBoard.board[0][0] = ship;
      ship.hit_count = 3;
      gameBoard.removeShip();
      expect(gameBoard.ships).not.toContain(ship);
      expect(gameBoard.board[0][0]).toBeNull();
    });
  });