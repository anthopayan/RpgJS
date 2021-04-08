class Character {
    constructor(hp, dm, mana, name, status = "playing") {
        this.hp = hp;
        this.dmg = dm;
        this.mana = mana;
        this.name = name;
        this.status = status;
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
    constructor(hp = 16, dm = 2, mana = 160, name = 'Ulder', status) {
        super(hp, dm, mana, name, status);
    }

    SpecialAttack = (perso) => {
        this.mana = this.mana - 40;
        this.hp = this.hp + 5;
        perso.takeDamage(4);
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

class Fighter extends Character {
    constructor(hp = 12, dm = 4, mana = 40, name = 'Grace', status) {
        super(hp, dm, mana, name, status);
    }

    SpecialAttack = (perso) => {
        this.mana = this.mana - 20;
        //Action au prochain tour à implémenter
        //this.hp = this.hp + 5; Il doit prendre de dégats de moins pendant un tour
        perso.takeDamage(5)
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

class Monk extends Character {
    constructor(hp = 8, dm = 2, mana = 200, name = 'Moana', status) {
        super(hp, dm, mana, name, status);
    }

    SpecialAttack = () => {
        this.mana = this.mana - 25;
        this.hp = this.hp + 8;
    }
}

class Berzerker extends Character {
    constructor(hp = 8, dm = 4, mana = 0, name = 'Draven', status) {
        super(hp, dm, mana, name, status);
    }

    SpecialAttack = () => {
        this.dmg = this.dmg + 1;
        this.hp = this.hp - 1;
    }
}

class Assassin extends Character {
    constructor(hp = 6, dm = 6, mana = 20, name = 'Carl', status) {
        super(hp, dm, mana, name, status);
    }

    SpecialAttack = (perso) => {
        this.mana = this.mana - 20;
        /*if (perso.hp > 0){
            if(perso.hp > 0){
            this.hp = this.hp -7;
            }
        }
        else {
            if (perso.status == "playing"){
                console.log(`${this.name} a vaincu ${perso.name} !`);
                this.mana = this.mana + 20;
                console.log(`${this.name} gagne 20 points de mana. Le joueur possede ${this.mana} points de mana !!!`)
            }
            perso.status = "looser";  
        }
        if (perso.status == "playing"){
        if (this.hp <= 0){
            console.log(`${perso.name} a rendu la monnaie de sa piece a ${this.name} !`);
            perso.mana = perso.mana + 20;
            console.log(`${perso.name} gagne 20 points de mana. Le joueur possede ${perso.mana} points de mana !!!`)
            this.status = "looser";  
        }
    } */
    }
}
var paladin = new Paladin;
var fighter = new Fighter;
var monk = new Monk;
var berzerker = new Berzerker;
var assassin = new Assassin;