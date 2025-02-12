class Ship {
    constructor(name, length) {
        this.name = name;
        this.length = length; // Size of the ship
        this.hit_count = 0; // count of hits
        this.sunk = false;
    }
    // keeps track of how many times the ship has been hit
    hit() {
        this.hit_count++;
    }
    isSunk() {
        if (this.hit_count === this.length) {
            this.sunk = true;
        }
        return this.sunk;
    }
}

 export default Ship;