var readlineSync = require('readline-sync');
const num1 = readlineSync.question("Please enter your first number: ");
const num2 = readlineSync.question("Please enter your second number: ");
const maths = readlineSync.question("Please enter operation to perform (add, sub, mult, div");
var operation = function(){
    if(maths === "add"){
        return parseInt(num1) + parseInt(num2)
    }
    else if(maths === "sub"){
        return (num1) - (num2)
    }
    else if(maths === "mult"){
        return (num1) * (num2)
    }
    else if(maths === "div"){
        return (num1) / (num2)
    }
    else {
        return "Try Again"
    }
}
var final = operation(maths)
console.log("The result is: " +final)