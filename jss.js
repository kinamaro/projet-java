const prompt = require("prompt-sync")();


function annonceAttack(){
    console.log("Vous avez le choix entre 4 attaques :");
    console.log("");
    console.log(attackOne.name + ", Inflige " + attackOne.power + " PV de dégat et a " + 100 / attackOne.accuracy + "% de chances de toucher.");
    console.log(attackTwo.name + ", Inflige " + attackTwo.power + " PV de dégat et a " + 100 / attackTwo.accuracy + "% de chances de toucher.");
    console.log(attackThree.name + ", Inflige " + attackThree.power + " PV de dégat et a " + 100 / attackThree.accuracy + "% de chances de toucher.");
    console.log(attackFour.name + ", Inflige " + attackFour.power + " PV de dégat et a " + 100 / attackFour.accuracy + "% de chances de toucher.");
    console.log("");
    }

function choixAttackUser() {
    attackChoiceUser = parseInt(prompt("Entrez le numéro de l'attaque que vous voulez lancer : "));
    return tableauAttack[attackChoiceUser - 1];
}


function attack(attackName, attackedPlayer) {
    if (tirageAuSort(attackName.accuracy) == attackName.accuracy - 1) {
    attackedPlayer.pv = attackedPlayer.pv - attackName.power;
    return attackedPlayer.pv;
    }
}


const attackOne = {
    name: "1 : FastAttack",
    power: 10,
    accuracy: 2
}
const attackTwo = {
    name: "2 : lightHeal",
    power: -15,
    accuracy: 3
    if (hp > 100 ){
    hp = 100
}
const attackThree = {
    name: "3 : heavyAttack",
    power: 20,
    accuracy: 3
}
const attackFour = {
    name: "4 : finisHim",
    power: 30,
    accuracy: 4
}


const tableauAttack = [attackOne, attackTwo, attackThree, attackFour];

let guerrierDuFeu = {
    name: "Guerrier du feu",
    pv: 100,
    atks: [attackOne, attackTwo, attackThree, attackFour]
} 

let sombreLutin = {
    name: "Sombre lutin",
    pv: 100,
    atks: [attackOne, attackTwo, attackThree, attackFour]
} 


let bothPlayers = [guerrierDuFeu, sombreLutin];

function tirageAuSort(max) {
    return Math.floor(Math.random() * max)
}

let firstPlayer = bothPlayers[0];
let secondPlayer = bothPlayers[1];



console.log("------------------------------------------------------------");
console.log("bonne chance !");
console.log("------------------------------------------------------------");
console.log("");

while (firstPlayer.pv > 0 && secondPlayer.pv > 0) {
    

annonceAttack();


let choice = choixAttackUser();

attack(choice, secondPlayer);

console.log("C'est au tour de " + secondPlayer.name + " de jouer");


let attackChoiceComputer = tableauAttack[tirageAuSort(4)];
attack(attackChoiceComputer, firstPlayer);

console.log(firstPlayer.name + " (vous) " + firstPlayer.pv);
console.log(secondPlayer.name + " (ordinateur) " + secondPlayer.pv);

if (firstPlayer.pv < 1) {
    console.log("Fin de la partie " + secondPlayer.name + " (ordinateur) " + " a gagné");
}
else if (secondPlayer.pv < 1) {
    console.log("Fin de la partie " + firstPlayer.name + " (vous) " + " a gagné");
}
}
