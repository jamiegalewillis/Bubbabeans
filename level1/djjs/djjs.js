const square = document.querySelector(".square");

square.addEventListener('mouseover', blueSquare);
function blueSquare() {
  square.style.backgroundColor = "blue";
square.addEventListener('mousedown',redSquare);
  function redSquare() {
  square.style.backgroundColor = "red";
}
square.addEventListener('mouseup', yellowSquare);
function yellowSquare(){
  square.style.backgroundColor ="yellow";
}
square.addEventListener('dblclick', greenSquare);
function greenSquare(){
  square.style.backgroundColor ="green";
}
square.addEventListener('mouseleave', orangeSquare);
function orangeSquare(){
  square.style.backgroundColor ="orange";
}

}
document.addEventListener("keydown", e => {
  if(e.key === 'b') {
      square.style.backgroundColor= "blue"
  } else if (e.key === 'r') {
      square.style.backgroundColor= "red"
  } else if (e.key === 'g') {
      square.style.backgroundColor = "green"
  } else if (e.key === 'y') {
      square.style.backgroundColor = "yellow"
  } else if (e.key === 'o') {
  square.style.backgroundColor ="orange"
  }
})
  
  

