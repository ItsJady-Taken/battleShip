class Ship {
    constructor(length) {
        this.length = length // Size of the ship
        this.hit_count = 0 // count of hits
        this.sunk = false
    }
    // keeps track of how many times the ship has been hit
    hit() {
        if(this.hit_count < this.length) {
            this.hit_count++;
        }
        
    }
    isSunk() {
        if (this.hit_count === this.length) {
            return this.sunk = true;
        }
        return false;
    }
}

 export default Ship;