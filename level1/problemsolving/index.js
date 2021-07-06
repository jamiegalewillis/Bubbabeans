function myLargestNumber(array) {

    var largest= 0;

   for (i=0; i<=largest;i++){
        if (array[i]>largest) {
             var largest=array[i];
        }
   }
        console.log(largest)
    return myLargestNumber
}
myLargestNumber([23 , 57, 467, 514, 32, 55, 88, 32])
myLargestNumber([23 , 570, 467, 5114, 32, 55, 889, 32])
myLargestNumber([239 , 57, 4670, 514, 832, 55, 88, 32])

 lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!")

function sameCharacter(letters, character){
    const newArray =[]  
    for (let i = 0; i<letters.length; i++){
        if (letters[i].includes(character)){
            newArray.push(letters[i])
        }
    }
    return newArray
}
console.log(sameCharacter(["#3", "$$$", "C%4!", "Hey!"], "!"))
