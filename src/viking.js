// Soldier
class Soldier {
    constructor(health,strength){
        (this.health = health),(this.strength = strength)
    }

    attack(){
        return this.strength;
    }

    receiveDamage(damage){
       this.health -= damage;

    }
}


// Viking
class Viking extends Soldier {
   constructor(name,health,strength) {
    super(health,strength); //propriedades da classe pai quero manter
    this.name = name;   
}      
    attack(){
        return this.strength
    }
    receiveDamage(damage){
        this.health -= damage;

        if (this.health > 0){
            return `${this.name} has received ${damage} points of damage`;
        }else {
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry(){
            return "Odin Owns You All!";
       }
}

// Saxon
class Saxon extends Soldier{
    receiveDamage(damage){
        this.health -= damage;
        
        if (this.health > 0){ //estou vivo
            return `A Saxon has received ${damage} points of damage`;
        } else {  //eu estou morto
            return `A Saxon has died in combat`;
        }
      }
    }


// War
class War {
    constructor (){
        this.vikingArmy = []
        this.saxonArmy = []
    }

    addViking(Viking) {
    this.vikingArmy.push(Viking)
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }

    vikingAttack() {
//escolher de dentro da array vikingArmy um viking aleatoriamente
//escolher de dentro da array saxonArmy um saxon aleatoriamente


// meu index randows
let randomIndexViking = Math.floor(Math.random() * this.vikingArmy.length); // Index n.4 exemplo
let randomIndexSaxon = Math.floor(Math.random() * this.saxonArmy.length); //Index n.2 exemplo
 

//capturar meus soldados
//               array exercito [     4          ]
let randomViking = this.vikingArmy[randomIndexViking];
//               array exercito [     2          ]
let randomSaxon = this.saxonArmy[randomIndexSaxon];

let result = randomSaxon.receiveDamage(randomViking.attack());

if (randomSaxon.health <= 0) {
    this.saxonArmy.splice(randomIndexSaxon, 1);
  }
  return result;
}
    
    saxonAttack() {
//escolher de dentro da array vikingArmy um viking aleatoriamente
//escolher de dentro da array saxonArmy um saxon aleatoriamente


// meu index randows novamente
let randomIndexViking = Math.floor(Math.random() * this.vikingArmy.length);
let randomIndexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
let randomViking = this.vikingArmy[randomIndexViking];
let randomSaxon = this.saxonArmy[randomIndexSaxon];
let result = randomViking.receiveDamage(randomSaxon.attack());
if (randomViking.health <= 0) {
  this.vikingArmy.splice(randomIndexViking, 1);
}
return result;
}

    showStatus(){
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
          }
          if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
          }
          if (this.saxonArmy && this.vikingArmy) {
            return `Vikings and Saxons are still in the thick of battle.`;
          }
        }
}
      
const war = new War();

const saxon1 = new Saxon(100, 40);
const saxon2 = new Saxon(100, 40);
const saxon3 = new Saxon(100, 40);
const saxon4 = new Saxon(100, 40);
const vikin1 = new Viking("Viking1", 100, 40);
const vikin2 = new Viking("Viking2", 100, 40);
const vikin3 = new Viking("Viking3", 100, 40);
const vikin4 = new Viking("Viking4", 100, 40);

war.addViking(vikin1);
war.addViking(vikin2);
war.addViking(vikin3);
war.addViking(vikin4);


war.addSaxon(saxon1);
war.addSaxon(saxon2);
war.addSaxon(saxon3);
war.addSaxon(saxon4);

console.log(war.vikingAttack());
console.log(war.saxonAttack());
console.log(war.showStatus());
console.log(war.vikingAttack());
console.log(war.saxonAttack());
console.log(war.showStatus());
console.log(war.vikingAttack());
console.log(war.saxonAttack());
console.log(war.showStatus());
console.log(war.vikingAttack());
console.log(war.saxonAttack());
console.log(war.showStatus());
console.log(war.vikingAttack());
console.log(war.saxonAttack());
console.log(war.showStatus());
console.log(war.vikingAttack());
console.log(war.saxonAttack());
console.log(war.showStatus());
console.log(war.vikingAttack());
console.log(war.saxonAttack());
console.log(war.showStatus());
console.log(war.vikingAttack());
console.log(war.saxonAttack());
console.log(war.showStatus());
console.log(war.vikingAttack());
console.log(war.saxonAttack());
console.log(war.showStatus());
console.log(war.vikingAttack());
console.log(war.saxonAttack());
console.log(war.showStatus());
console.log(war.vikingAttack());
console.log(war.saxonAttack());
console.log(war.showStatus());
console.log(war.vikingAttack());
console.log(war.saxonAttack());
console.log(war.showStatus());




