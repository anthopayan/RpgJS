class Character{
    constructor(hp, dm, mana, status = "playing"){
        this.hp = hp;
        this.dmg = dm;
        this.mana = mana;
        this.status = status;
    }
}

class Paladin extends Character{
    constructor(hp = 16, dm = 2, mana = 160, status){
        super(hp, dm, mana, status);
    }
}

class Fighter extends Character{
    constructor(hp = 12, dm = 4, mana = 40, status){
        super(hp, dm, mana, status);
    }
}

class Monk extends Character{
    constructor(hp = 8, dm = 2, mana = 200, status){
        super(hp, dm, mana, status);
    }
}

class Berserker extends Character{
    constructor(hp = 8, dm = 4, mana = 0, status){
        super(hp, dm, mana, status);
    }
}

class Assassin extends Character{
    constructor(hp = 6, dm = 6, mana = 20, status){
        super(hp, dm, mana, status);
    }
}