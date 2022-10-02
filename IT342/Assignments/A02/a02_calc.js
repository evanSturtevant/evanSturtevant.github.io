var total = null;
var calculatorOutput = document.getElementById("calculatorOutput");
var calculatorInput = document.getElementById("calculatorInput");

var addBtn = document.getElementById("addBtn");
var subtractBtn = document.getElementById("subtractBtn");
var multiplyBtn = document.getElementById("multiplyBtn");
var divideBtn = document.getElementById("divideBtn");
var clearBtn = document.getElementById("clearBtn");
var equalsBtn = document.getElementById("equalsBtn");

function calculate(operation){
    let x = parseInt(calculatorInput.value);
    let y = parseInt(calculatorOutput.value);
    
    if (x && y){
        total = operation(x,y);
    }

    clearInputs();
    calculatorOutput.value = total;
    
}

function clear(){
    total = null;
    clearInputs();
}

function clearInputs(){
    calculatorInput.value = "";
    calculatorOutput.value = "";
}


function add(x,y){
    return x + y;
}
function subtract(x,y){
    return x-y;
}
function divide(x,y){
    if (y == 0) {return 0;}
    return x/y;
}
function multiply(x,y){
    return x*y;
}

addBtn.addEventListener("click", function (){ calculate(add);} );
subtractBtn.addEventListener("click", function () { calculate(subtract);} );
multiplyBtn.addEventListener("click", function () { calculate(multiply);} );
divideBtn.addEventListener("click", function () { calculate(divide);} );
clearBtn.addEventListener("click", function () { clear();} );