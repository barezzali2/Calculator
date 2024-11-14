const display = document.getElementById("displayNums");

function addToDisplay(input) {
    display.value += input;

}

function calculate() {
    try{
        display.value = eval(display.value);
        
    }catch(e) {
        display.value = "Error";
    }
}

function clearDisplay() {
    display.value = "";
}


