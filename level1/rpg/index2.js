
/* fun message - ask for name
walking =w random attack
enemy array 3 to 4 
attack or run
attack power min or max math.random()
50/50 chance of escape
if attack enemy attacks back
*/

const readlineSync = require('readline-sync');

const name = readlineSync.question('What is your name? ');

readlineSync.question(`Hello ${name}, You have stumbled into my maze. Hopefully you escape while you are still alive.(Press Enter to Continue)`)

const enemies = ['Killer Snake', 'Big Bad Wolf', 'Wicked Witch', 'Rabid Rat'];
const treasure = ['25 coins', 'Invisibility Cloak', 'Sword', 'Magic Wand'];
var prize = [];
let wizardLife = 50;
const menu = ['Walk', 'Leave', 'Explore bag'];
let collected = treasure[Math.floor(Math.random()*treasure.length)];
function game(){
    const attackPower = Math.floor(Math.random() * (3-2+4) + 4);
    const enemy = enemies[Math.floor(Math.random() * enemies.length)];
    let enemyHealth = 30;
    const enemyPower = Math.floor(Math.random()* (6-4+2)+3);

    const index = readlineSync.keyInSelect(menu, 'Which option would you like to choose?');

    if(menu[index] == 'Leave'){
        console.log (`${name} has left the Maze`);
        return wizardLife = 0;
    } 
    else if (menu[index] == 'Explore bag'){
        console.log(`${name}'s bag contains ${collected} \n Health Bar at (${wizardLife}) out of 50`);
    }
    else if(menu[index] === 'Walk'){
        let key = Math.random();
        if (key <= .3) {
            console.log('Walking...');
        }
        else if (key >= .3){
            console.log (`You have stumbled into a ${enemy}!`);
            while (enemyHealth > 0 && wizardLife > 0) {
                const wizard = readlineSync.question(`Will you run (press "r") or will you stand and fight? (press "f") `);
                    switch(wizard){
                        case 'r':
                            const run = Math.random();
                            if (run < .5){
                                console.log(`${enemy} is faster and hits you for ${enemyPower} damage.`);
                            }
                            else {
                                console.log('You ran away!!');
                                    break
                            }
                        case 'f':
                            enemyHealth -= attackPower;
                            console.log(`You attacked ${enemy} for ${attackPower} damage.`);
                            wizardLife -= enemyPower;
                            console.log(`You were attacked for ${enemyPower} damage.`);
                            if (enemyHealth <= 0){
                                console.log(`You have vanquished the ${enemy} and found ${collected}.`);
                                let loot = Math.random();
                                if (loot <= .3){
                                    prize.push(collected);
                                }
                                }
                            else if (wizardLife <= 0){
                                console.log(`${enemy} has killed ${name}. GAME OVER`);
                            }
                            }

                    }
            }
        }
    }
 while(wizardLife > 0) {
    wizardHealing = function(){
        wizardAlive = true;
        wizardLife = 50
    }
    wizardHealing();
    game();
} 