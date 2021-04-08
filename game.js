class Game {
    constructor(turnLeft = 10, players = [Ulder, Moana, Grace, Draven, Carl]) {
        this.turnLeft = turnLeft;
        this.players = players;
    }
    newTurn = () => {

        test = new Turn;
        test.startTurn();
        console.log("Partie finie");
        //Condition de victoire à voir
        test.winStats();


    }

    watchStats = () => {
        console.log("Voici les stats des joueurs encore en vie !")
        var alive = [];
        for (var player of this.players) {
            if (player.status == "playing") {
                alive.push(player);
            }
        }
        console.log(alive);
    }

    winStats = () => {
        var i = 0;
        var winner = 0;
        var alive = [];
        for (var player of this.players) {
            if (player.status == "playing") {
                alive.push(player);
            }
        }
        const filter = alive.filter(function(user) {
            if (i < user.hp) {
                i = user.hp;
                winner = user.name;
            }
        });
        console.log(`Le grand gagnant est: ${winner}`);
    }
}