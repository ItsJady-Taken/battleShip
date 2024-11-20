import GameBoard from "./gameBoard";

class Player {
    constructor(type) {
        this.type = type;
        this.board = new GameBoard();
    }
}

class RealPlayer extends Player {
    constructor() {
        super('human');
    }
}

class ComputerPlayer extends Player {
    constructor() {
        super('computer');
    }
}

export { RealPlayer, ComputerPlayer };
