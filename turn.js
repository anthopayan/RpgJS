class Turn extends Game {
    constructor(players) {
        super(players = [Ulder, Moana, Grace, Draven, Carl]);
        this.players = players;
    }

    startTurn = () => {
        var t = 1;
        while (t <= 10) {
            var fightsp = 0;
            console.log(`Le tour numero ${t} commence !`);
            shuffle(this.players);
            for (let i = 0; i<5;i++) {
                var current_player = this.players[i];
                if (current_player.status == "playing") {

                    var result = prompt(`Tour numero ${t} \nC'est au tour de ${current_player.name}. \nVoulez-vous effectuer une attaque speciale ou une attaque normale ? \n Normale \n Speciale`);
                    if (result == "Normale") {

                    var result = prompt(`Tour numero ${t} \n${current_player.name} effectue une attaque normale. \nEntrez le nom du personnage que vous voulez attaquer: \n\nUlder\nGrace\nMoana\nDrarven\nCarl`);

                    if (result != null) {
                        if ((result === ("Ulder")) && (result !== current_player.name)) {
                            current_player.dealDamage(Ulder);
                        } else if ((result === "Grace") && (result !== current_player.name)) {
                            if (fightsp == 1){
                                Grace.hp = Grace.hp + 2;
                            }
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
                else if (result == "Speciale"){
                    if (current_player.manamin <= current_player.mana){
                        if (current_player.name === "Moana" || current_player.name === "Draven"){
                            current_player.SpecialAttack();
                        }
                        if (current_player.name === "Ulder"){
                            var result = prompt(`Tour numero ${t} \n${current_player.name} effectue Healing Lighting ! \nEntrez le nom du personnage que vous voulez attaquer: \n\nGrace\nMoana\nDrarven\nCarl`);
                            if (result != null) {
                                if (result === ("Ulder")) {
                                    i=i-1;
                                    console.log("Vous ne pouvez pas vous attaquer vous-meme !")
                                } else if ((result === "Grace")) {
                                    if (fightsp == 1){
                                        Grace.hp = Grace.hp + 2;
                                    }
                                    current_player.SpecialAttack(Grace);
                                    if (fightsp == 1){
                                       
                                    }
                                } else if (result === ("Moana")) {
        
                                    current_player.SpecialAttack(Moana);
                                } else if (result === ("Draven")) {
        
                                    current_player.SpecialAttack(Draven);
                                } else if (result === ("Carl")) {
        
                                    current_player.SpecialAttack(Carl);
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

                        if (current_player.name === "Grace"){
                            var result = prompt(`Tour numero ${t} \n${current_player.name} effectue Dark Vision ! \nEntrez le nom du personnage que vous voulez attaquer: \n\nUlder\nMoana\nDrarven\nCarl`);
                            if (result != null) {
                                fightsp = 1;
                                if (result === ("Grace")) {
                                    i=i-1;
                                    console.log("Vous ne pouvez pas vous attaquer vous-meme !")
                                } else if ((result === "Ulder")) {
                                    if (fightsp == 1){
                                    }
                                    current_player.SpecialAttack(Grace);
                                } else if (result === ("Moana")) {
        
                                    current_player.SpecialAttack(Moana);
                                } else if (result === ("Draven")) {
        
                                    current_player.SpecialAttack(Draven);
                                } else if (result === ("Carl")) {
        
                                    current_player.SpecialAttack(Carl);
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

                    else {
                        console.log(`${current_player.name} ne possede pas assez de mana pour pouvoir effectuer son attaque speciale.`)
                        i=i-1;  
                    }


                }
                else if (result === ("exit") || result === ("Exit")){
                    return;
                } 
                else if (result === ("stats")) {
                    test.watchStats();
                    i=i-1;
                }
                else if (result == null){
                    console.log("Pour quitter la partie veuillez saisir: exit")
                    i=i-1;
                }
                else {
                    console.log("Nom invalide, veuillez sélectionner un nom valide !")
                    i=i-1; 
                }
                }
            }
        t++;
        }
    }
}

function shuffle(a){
    var j = 0;
    var valI = '';
    var valJ = valI;
    var l = a.length - 1;
    while (l>-1){
        j = Math.floor(Math.random() * l);
        valI = a[l];
        valJ = a[j];
        a[l] = valJ;
        a[j] = valI;
        l = l-1;
    }
    return a
}