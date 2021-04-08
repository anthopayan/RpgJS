class Game {
    constructor(turnLeft = 10, players = [paladin, monk, fighter, berzerker, assassin]) {
        this.turnLeft = turnLeft;
        this.players = players;
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