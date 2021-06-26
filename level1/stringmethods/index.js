var dog="Bubba"

function upperAndLowerCase(){

var upperCase = dog.toUpperCase().toLowerCase()
console.log(upperCase)
return upperCase
}
upperAndLowerCase()


function middleIndex(){
var newArray=dog.slice(0, Math.floor(dog.length/2));
console.log(newArray.length)
return newArray.length
}

middleIndex()




