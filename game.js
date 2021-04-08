class Game {
    constructor(turnLeft = 10, players = [Ulder, Moana, Grace, Draven, Carl]) {
        this.turnLeft = turnLeft;
        this.players = players;
    }
    newTurn = () => {
        
        test = new Turn;
        test.startTurn();
        if (this.turnLeft > 0) {
            this.turnLeft = this.turnLeft - 1;
            //Lancer un nouveau tour (new Turn() ?)
        } else {
            console.log("Partie finie");
            //Condition de victoire à voir
        }

    }

    watchStats = () => {
        console.log("Voici les stats des joueurs encore en vie !")
        for (var player of this.players){
            if (player.status == "playing"){
                console.log(player);
            } 
        }
    }
}