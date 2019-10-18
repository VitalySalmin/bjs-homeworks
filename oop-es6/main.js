class Weapon {
  constructor(name, attack, durability, range) {
   this.name = name;
   this.attack = attack;
   this.durability = durability;
   this.range = range; 
  }
  
  takeDamage(damage) {
    if (this.durability <= 0) {
      console.log("durability is already 0");
    } else {
      if (((this.durability - damage)/this.durability)<= 30) {
      this.attack = this.attack / 2;  
      }
      this.durability = this.durability - damage;
      let hit = new Audio("https//s1download-universal-soundbank.com/wav/1433.wav");
      hit.play();
    }
    if (this.durability <= 0) {
      this.attack = 0;
      this.durability = 0 
      let swordBreaks = new Audio("https://www.sfu.ca/~johannac/IAT202 Exercise3/metal 2 STE-018.wav");
      swordBreaks.play();
    }
  }
  getDamage() {
  return this.attack;
  }
  isBroken() {
    if (this.durability === 0) {
      return true;
    } else {
      return false;
    }
  }
}

const sword = new Weapon('Меч', 25, 500, 1);

//sword.takeDamage(11);

sword.takeDamage(9);
console.log(sword.durability);
console.log(sword.getDamage())
console.log(sword.isBroken());

const ax = Object.assign({},sword);
ax.name = 'Секира';
ax.attack = 27;
ax.durability = 800;

const arm = new Weapon('Рука', 1,  Infinity, 1);
const bow = new Weapon('Лук', 10, 200, 3);
const knife = new Weapon('Нож', 5, 300, 1);
const stick = new Weapon('Посох', 8, 300, 2);

const longBow = Object.assign({},bow);
longBow.name = 'Длинный лук';
longBow.attack = 27;
longBow.range = 4;

const stormStick = Object.assign({},stick);
stormStick.name = 'Посох бури';
stormStick.attack = 10;
stormStick.range = 3;


// TASK 2
class swordClass extends Weapon{
  name = 'Меч'
  attack = 25
  durability = 500
  range = 1
};

class bowClass extends Weapon{
  name = 'Лук'
  attack = 10
  durability = 200
  range = 3
};

class armClass extends Weapon{
  name = 'Рука'
  attack = 1
  durability = Infinity
  range = 1
};

class knifeClass extends Weapon{
  name = 'Нож'
  attack = 5
  durability = 300
  range = 1
};

class stickClass extends Weapon{
  name = 'Посох'
  attack = 8
  durability = 300
  range = 2
};


console.log(new bowClass())

class longBowClass extends bowClass {
 name = 'Длинный лук'
 attack = 27
 range = 4 
}

console.log(new longBowClass())

class stormStickClass extends stickClass {
  name = 'Посох бури';
  attack = 10;
  range = 3; 
}

class axClass extends swordClass {
  name = 'Посох бури';
  attack = 10;
  range = 3; 
}