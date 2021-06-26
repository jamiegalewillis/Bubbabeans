const readlineSync = require("readline-sync");
const userName = readlineSync.question("What is your name?");
    console.log("Hi " + userName + "!");
const entrance = readlineSync.question('Shall we start? [Y] or [N] ');
    if (entrance == "y"){
     console.log("Awesome! " +userName+ " Let's start! You are locked in a cave. Your choices are find the key, Open the door, or stick your hand in the hole in the wall. If you put ypur hand in the hole, YOU DIE!!!")
    } 
    else if (entrance == "n"){
     console.log('Maybe some other time')
            process.exit()
    }

isPlaying = true
let keyFound = false

while(isPlaying == true){
   
    const playerOption = readlineSync.question("Are you sure you wanted to ... \n [1] Open the door? \n [2] Put hand in the hole? \n [3] Find key? \n",{limit:["1","2","3"]});
    switch(playerOption){ 
        case '2':
            console.log ('YOU DIE!!!')
            isPlaying = false;
            break;
        case '3':
            console.log ('You found the key under the rug!');
            keyFound = true;
            break;
        case '1':
            if(keyFound === true){
                console.log("You have won!")   
                isPlaying=false
            }    
            else{
                console.log('You do not have key 😫, try again');
            }
            break;
    }    
}

// scenario: 2: 
// you're supposed to die

// scenario: 3
// find the key
// they open the door 

// scenario  1
// if the user has found the key, keyFound === true
//    let them open the door
//    they win
//    isPlaying = false
//    console.log("You have won!")
// else the user has not found the key
//    console.log("you dont have the key")