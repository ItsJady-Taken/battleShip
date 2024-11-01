import GameBoard from "./gameBoard";

class Player {
    constructor(type) {
        this.type = type;
        this.newBoard = new GameBoard();
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
