


function arrMethodsExercisesFunc() {
    var fruit =["banana", "apple", "orange", "watermelon"]
    var vegetables=["carrot", "tomato", "pepper", "lettuce"]
    vegetables.pop()
    var veggieLength = vegetables.length
    vegetables.push(veggieLength)
    fruit.shift()
    var orangeindex = fruit.indexOf('orange')
    fruit.push(orangeindex)
    var food = fruit.concat(vegetables)
    food.splice(4, 2)
    var reversedFood = food.reverse().join(",")
    console.log(reversedFood)


}
arrMethodsExercisesFunc()
    




























// //Declaration

// function plusOne (num) {
//      num = num + 1
//      console.log(num)
//      return num
// }



// //Expression
// plusOne(2)





