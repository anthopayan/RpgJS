class Game {
    constructor(turnLeft = 10) {
        this.turnLeft = turnLeft;
        this.players = [new Paladin(), new Monk(), new Fighter(), new Berzerker(), new Assassin()];
    }
    newTurn = () => {
        if (this.turnLeft > 0) {
            this.turnLeft = this.turnLeft - 1;
            //Lancer un nouveau tour (new Turn() ?)
        } else {
            console.log("Partie finie");
            //Condition de victoire à voir
        }

    }
}