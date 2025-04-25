const display = document.getElementById("display");
display.value = "0";

function addToDisplay(input){
  if (display.value === "0") {
    display.value = input;
}else {
    display.value += input;
}
}

function removeFromDisplay(){
  display.value = display.value.slice(0, -1);
  if(display.value === ""){
    display.value = "0";
  }
}

function clearDisplay(){
  display.value = "0";
}

function calculateResult(){
  display.value = eval(display.value);
}

const themeToggleButton = document.querySelector('.theme-toggle');
function toggleTheme(){ 
  document.body.classList.toggle('light-mode'); 
}