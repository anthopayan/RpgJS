class Turn {
    constructor(players, turn_number) {
        players = [new Paladin(), new Monk(), new Fighter(), new Berzerker(), new Assassin()];
        this.players = players.sort(() => Math.random() - 0.5);
        this.turn_number = turn_number;
    }

    startTurn = () => {
        console.log(`Le tour numero ${turn_number} commence !`);
        for (var current_player of players) {
            if (current_player.status == "playing") {
                var result = prompt("Entrez le nom du personnage que vous voulez attaquer\n1.Ulder\n2.Grace\n3.Moana\n4.Drarven\n5.Carl");

                if (result != null) {
                    this.dealDamage(result);
                }
            }
        }
    }
}