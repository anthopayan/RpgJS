class Turn extends Game {
    constructor(players) {
        super(players = [Ulder, Moana, Grace, Draven, Carl]);
        this.players = players.sort(() => Math.random() - 0.5);
    }

    startTurn = () => {
        var t = 1;
        while (t <= 10) {
            console.log(`Le tour numero ${t} commence !`);
            for (let i = 0; i<5;i++) {
                var current_player = this.players[i];
                if (current_player.status == "playing") {
                    var result = prompt(`Tour numero ${t} \nC'est au tour de ${current_player.name}. \nEntrez le nom du personnage que vous voulez attaquer: \n\nUlder\nGrace\nMoana\nDrarven\nCarl`);

                    if (result != null) {
                        if ((result === ("Ulder")) && (result !== current_player.name)) {
                            current_player.dealDamage(Ulder);
                        } else if ((result === "Grace") && (result !== current_player.name)) {

                            current_player.dealDamage(Grace);
                        } else if (result === ("Moana") && (result !== current_player.name)) {

                            current_player.dealDamage(Moana);
                        } else if (result === ("Draven") && (result !== current_player.name)) {

                            current_player.dealDamage(Draven);
                        } else if (result === ("Carl") && (result !== current_player.name)) {

                            current_player.dealDamage(Carl);
                        } else if (result === ("exit") || result === ("Exit")){
                            return;
                        } else if (result === ("stats")) {
                            test.watchStats();
                            i=i-1;
                        }else {
                            console.log("Nom invalide, veuillez sélectionner un nom valide !")
                            i=i-1;
                        }
                    }
                    else {
                        console.log("Pour quitter la partie veuillez saisir: exit")
                        i=i-1;
                    }
                }
            }
            
        }
    }
}