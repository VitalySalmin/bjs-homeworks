const checkIfBroken = "isBroken";
class Weapon {
  constructor(name, attack, durability, range) {
    this.name = name;
    this.attack = attack;
    this.durability = durability;
    this.range = range; 
    this.durabilityOnStart = durability;
  }
  
  takeDamage(damage) {
    if (this.durability <= 0) {
      console.log("durability is already 0");
    } else {
      this.durability = this.durability - damage;
      //let hit = new Audio("https//s1download-universal-soundbank.com/wav/1433.wav");
      //hit.play();
      console.log(`damage taken:  ${damage}`);
    }
    if (this.durability <= 0) {
      this.attack = 0;
      this.durability = 0 /*чтобы избежать отрицательных значений у прочности - "Первое задание:
takeDamage. проверьте условия метода. У вас два одинаковых условия if (this.durability <= 0)" я сделал первое для того, чтобы посмотреть прочность до того как отнять от нее повреждением, на случай если она уже ноль (или отриц каким-то обр), второе условие соотв. после того как от прочности отнимут повреждением, чтобы проверить стала ли она отриц, чтобы ее сделать нулевой если да. Я могу поместить это условие внутрь else или же убрать вовсе если это лишняя проверка (до поврждения которая)*/
      //let swordBreaks = new Audio("https://www.sfu.ca/~johannac/IAT202 Exercise3/metal 2 STE-018.wav");
      //swordBreaks.play();
      console.log("durability of the weapon is now 0, it can not take any more damage or cause damage");
    }
  }
  getDamage() {
  if (((this.durability/this.durabilityOnStart)*100) < 30){return this.attack/2;
  } else {
    return this.attack;
  }
  }
  [checkIfBroken]() {
    if (this.durability === 0) {
      return true;
    } else {
      return false;
    }
  }
}


const sword = new Weapon('Меч', 25, 500, 1);

console.log(`durability: ${sword.durability}`);
console.log(`durabilityOnStart: ${sword.durability}`);

sword.takeDamage(300);
console.log(`durability: ${sword.durability}`);console.log(`damage: ${sword.getDamage()}`);
sword.takeDamage(51);
console.log(`durability: ${sword.durability}`);console.log(`damage: ${sword.getDamage()}`);
console.log(`broken: ${sword.isBroken()}`);
sword.takeDamage(149);
console.log(`durability: ${sword.durability}`);console.log(`damage: ${sword.getDamage()}`);
console.log(`broken: ${sword.isBroken()}`);
sword.takeDamage(1);

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

/* "Во втором задании оружие вы создаёте не верно" - не особо помогло понять, как сделать так, чтобы было верно. По тз классы обычного оружия должны наследоваться от Weapon  и улучшенное оружие от обычного. Я так понял это и есть "extends" +  я столкнулся еще и с проблемой теперь после того как я добавил  durabilityOnStart (она, наверное и возникла из-за того, что я делаю наследование классов неправильно  тут) - это свойство будто вообще не наследуется если в классе я прописываю значения для др  свойств(а как иначе если подклассы оружий по тз должны содержать в себе значения для будущих их экземпляров. Пожалуйста, дайте хотя бы маленький намек на то, как сделать наследование верно тут. */
class testClass extends Weapon {

}
console.log(new testClass())
class swordClass extends Weapon{
  name = 'Меч'
  attack = 25
  durability = 500
  range = 1
}

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
}

class knifeClass extends Weapon{
  name = 'Нож'
  attack = 5
  durability = 300
  range = 1
}

class stickClass extends Weapon{
  name = 'Посох'
  attack = 8
  durability = 300
  range = 2
}


console.log(new bowClass())

class longBowClass extends bowClass {
 name = 'Длинный лук'
 attack = 27
 range = 4 
}

console.log(new longBowClass())

class stormStickClass extends stickClass {
  name = 'Посох бури'
  attack = 10
  range = 3
}

class axClass extends swordClass {
  name = 'Посох бури'
  attack = 10
  range = 3
}