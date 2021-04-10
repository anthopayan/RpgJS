class Game {
    constructor(turnLeft = 10, players = [Ulder, Moana, Grace, Draven, Carl]) {
        this.turnLeft = turnLeft;
        this.players = players;
    }

    newTurn = () => {

        var asssp = 0;
        while (this.turnLeft>0){
            var t = 11 - this.turnLeft;
            test = new Turn;
            asssp = test.startTurn(t,asssp);
            this.turnLeft = this.turnLeft - 1;
            if (this.isthereawinner()){
                this.winStats()
                break
            }
        }
        this.winStats()

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

    isthereawinner = () => {
        var alive = [];
        for (var player of this.players) {
            if (player.status == "playing") {
                alive.push(player);
            }
        }
        if (alive.length == 1){
            return true
        }
        else{
            return false
        } 
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
        console.log("La partie est finie!");
        console.log(`Le grand gagnant est: ${winner}`);
    }

}