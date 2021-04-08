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
                var result = prompt("Entrez le nom du personnage que vous voulez attaquer\n1.Ulder\n2.Grace\n3.Moana\n4.Drarven\n5.Carl");

                if (result != null) {
                    console.log(result);
                    if (result == "ulder" || "Ulder"){
                        current_player.dealDamage(Ulder);
                    }

                    else if (result == "grace" || "Grace"){
                        
                        current_player.dealDamage(Grace);
                    }

                    else if (result == "moana" || "Moana"){
                        
                        current_player.dealDamage(Moana);
                    }

                    else if (result == "draven" || "Draven"){
                        
                        current_player.dealDamage(Draven);
                    }

                    else if (result == "carl" || "Carl"){
                        
                        current_player.dealDamage(Carl);
                    }

                
                    
                }
            }
        }
    }
}