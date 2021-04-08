class Turn extends Game {
    constructor(players) {
        super(players = [Ulder, Moana, Grace, Draven, Carl]);
        this.players = players.sort(() => Math.random() - 0.5);
    }

    startTurn = () => {
        console.log(`Le tour numero ${2} commence !`);
        for (var current_player of this.players) {
            console.log(current_player);
            if (current_player.status == "playing") {
                var result = prompt(`C'est au tour de ${current_player.name}. \n\nEntrez le nom du personnage que vous voulez attaquer: \n\nUlder\nGrace\nMoana\nDrarven\nCarl`);

                if (result != null) {
                    console.log(result);
                    if (result === ("Ulder")) {
                        current_player.dealDamage(Ulder);
                    } else if ((result === "Grace")) {

                        current_player.dealDamage(Grace);
                    } else if (result === ("Moana")) {

                        current_player.dealDamage(Moana);
                    } else if (result === ("Draven")) {

                        current_player.dealDamage(Draven);
                    } else if (result === ("Carl")) {

                        current_player.dealDamage(Carl);
                    } else {
                        console.log("Nom invalide, joueur suivant !")
                    }
                }
            }
        }
    }
}