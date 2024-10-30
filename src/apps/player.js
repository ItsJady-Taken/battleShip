import GameBoard from "./gameBoard";

class Player {
    constructor(type) {
        this.type = type;
        this.board = new GameBoard();
    }
}

class RealPlayer extends Player {
    constructor() {}
}

class ComputerPlayer extends Player {
    constructor() {}
}

