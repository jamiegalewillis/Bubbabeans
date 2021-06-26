const myHeader= document.getElementById("header")
myHeader.classList.add('header')
const head =document.createElement("header")
const firstPart = document.createElement('span')
firstPart.textContent = "JavaScript Made this!!"
const secondPart = document.createElement('span')
secondPart.textContent ="[your name here]"
secondPart.classList.add('name')
const thirdPart =document.createElement('span')
thirdPart.textContent = "wrote the JavaScript"
myHeader.append( head,firstPart, secondPart, thirdPart)



var myRightMessage = document.querySelectorAll("div.message.right")
const newMessage =myRightMessage[0]
console.log (newMessage)
newMessage.textContent =("Today is an amazing day!!")
const newmessage2 =myRightMessage[1]
newmessage2.textContent =('We are having a great time!!!')

var leftMessage = document.querySelectorAll("div.message.left")
const newLMessage =leftMessage[0]
console.log (newLMessage)
newLMessage.textContent =("Today is an amazing day!!")
const newLmessage2 = leftMessage[1]
newLmessage2.textContent =('We are having a great time!!!')

document.getElementById("clear-button").addEventListener("click", clearInterval);