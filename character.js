class Character {
    constructor(hp, dm, mana, name, manamin, status = "playing") {
        this.hp = hp;
        this.dmg = dm;
        this.mana = mana;
        this.name = name;
        this.status = status;
        this.manamin = manamin;
    }

    takeDamage = (dommage) => {
        if (this.hp > 0) {
            this.hp = this.hp - dommage;
        } else {
            console.log(`Vous ne pouvez pas tapper ${this.name} ... il est mort !!`);
        }
    }

    dealDamage = (perso) => {
        perso.takeDamage(this.dmg)
        if (perso.hp > 0) {
            console.log(`${this.name} attaque ${perso.name} et lui inflige ${this.dmg} de dommages!`);
            console.log(`Il lui reste ${perso.hp} points de vie!`);
        } else {
            if (perso.status == "playing") {
                console.log(`${this.name} a vaincu ${perso.name} !`);
                this.mana = this.mana + 20;
                console.log(`${this.name} gagne 20 points de mana. Le joueur possede ${this.mana} points de mana !!!`)
            }
            perso.status = "looser";
        }
    }
}

class Paladin extends Character {
    constructor(hp = 16, dm = 2, mana = 160, name = 'Ulder', manamin = 40, status) {
        super(hp, dm, mana, name, manamin, status);
    }

    SpecialAttack = (perso) => {
        console.log(`Ulder utilise Healing Lighting !!!`);
        this.mana = this.mana - 40;
        this.hp = this.hp + 5;
        perso.takeDamage(4);
        if (perso.hp > 0) {
            console.log(`${this.name} attaque ${perso.name} et lui inflige 4 de dommages!`);
            console.log(`Il lui reste ${perso.hp} points de vie!`);
        } else {
            if (perso.status == "playing") {
                console.log(`${this.name} a vaincu ${perso.name} !`);
                this.mana = this.mana + 20;
                console.log(`${this.name} gagne 20 points de mana. Le joueur possede ${this.mana} points de mana !!!`)
            }
            perso.status = "looser";
        }
    }
}

class Fighter extends Character {
    constructor(hp = 12, dm = 4, mana = 40, name = 'Grace', manamin = 20, status) {
        super(hp, dm, mana, name, manamin, status);
    }

    SpecialAttack = (perso) => {
        console.log(`Grace utilise Dark Vision !!!`);
        this.mana = this.mana - 20;
        perso.takeDamage(5)
        if (perso.hp > 0) {
            console.log(`${this.name} attaque ${perso.name} et lui inflige 5 de dommages!`);
            console.log(`Il lui reste ${perso.hp} points de vie!`);
        } else {
            if (perso.status == "playing") {
                console.log(`${this.name} a vaincu ${perso.name} !`);
                this.mana = this.mana + 20;
                console.log(`${this.name} gagne 20 points de mana. Le joueur possede ${this.mana} points de mana !!!`)
            }
            perso.status = "looser";
        }

    }
}

class Monk extends Character {
    constructor(hp = 8, dm = 2, mana = 200, name = 'Moana', manamin = 25, status) {
        super(hp, dm, mana, name, manamin, status);
    }

    SpecialAttack = () => {
        console.log(`Moana utilise Heal !!!`);
        this.mana = this.mana - 25;
        this.hp = this.hp + 8;
    }
}

class Berzerker extends Character {
    constructor(hp = 8, dm = 4, mana = 0, name = 'Draven', manamin = 0, status) {
        super(hp, dm, mana, name, manamin, status);
    }

    SpecialAttack = () => {
        console.log(`Draven utilise Rage !!!`);
        this.dmg = this.dmg + 1;
        this.hp = this.hp - 1;
    }
}

class Assassin extends Character {
    constructor(hp = 6, dm = 6, mana = 20, name = 'Carl', manamin = 20, status) {
        super(hp, dm, mana, name, manamin, status);
    }

    SpecialInitialize = () => {
        this.mana = this.mana - 20;
        console.log(`Carl prepare Shadow hit ... elle sera prete pour le prochain tour ... patience ...`);

    }

    SpecialAttack = (perso) => {
        console.log(`Carl utilise Shadow hit !!!`);
        if (perso.hp >0){
            perso.takeDamage(7)
            console.log(`${this.name} attaque ${perso.name} et lui inflige 7 de dommages!`);
        }
        else{
            console.log(`Vous avez attaque un mort ... deso, bisous!`);
        }

        if(perso.hp > 0){
            console.log(`${perso.name} a survecu a l attaque de ${this.name}. Fou de rage il lui botte le cul et lui inflige 7 de dommages!`);
            this.hp = this.hp -7;
            if (this.hp <= 0){
                console.log(`${perso.name} a rendu la monnaie de sa piece a ${this.name}, et l'a vaincu !`);
                perso.mana = perso.mana + 20;
                console.log(`${perso.name} gagne 20 points de mana. Le joueur possede ${perso.mana} points de mana !!!`)
                this.status = "looser";  
            }
        }
        else{
            if (perso.status == "playing"){
                console.log(`${this.name} a vaincu ${perso.name} !`);
                this.mana = this.mana + 20;
                console.log(`${this.name} gagne 20 points de mana. Le joueur possede ${this.mana} points de mana !!!`)
            }
            perso.status = "looser";
        } 
    }
}
var Ulder = new Paladin;
var Grace = new Fighter;
var Moana = new Monk;
var Draven = new Berzerker;
var Carl = new Assassin;