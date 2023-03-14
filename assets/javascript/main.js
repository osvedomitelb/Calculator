let operand1 = "";
let operator = "";
let operand2 = "";
let result = false;

let digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
let action = ["-", "+", "*", "/"];

let errors = document.querySelector(".calculator-screen")

let resScreen = document.querySelector(".start-value");

function aC() {
    operand1 = "";
    operator = "";
    operand2 = "";
    result = false;
    resScreen.textContent = "0";

}

let reset = document.querySelector(".clear");
reset.addEventListener("click", aC);



let button = document.querySelector(".buttons");

button.addEventListener("click", function(e){
    if(!e.target.classList.contains("button_btn"))return;
    if(e.target.classList.contains("ac"))return;

    resScreen.textContent = "";

    const key = e.target.textContent;

    if(digit.includes(key)){
        if(operand2 === "" && operator === ""){
            operand1 +=key;
            resScreen.innerText = operand1;
        }
        else if (operand1 !== "" && operand2 !== "" && result){
            operand2 = key;
            result = false;
            resScreen.textContent = operand2;

        }
        else {
            operand2 += key;
            resScreen.innerText = operand2;
        }
        return;
    }
    if(action.includes(key)){
        operator = key;
        resScreen.innerText = operator;
    }
    if(key == "="){

        if(operand2 === "") operand2 = operand1;
        switch(operator){
            case "+":
                operand1 = (+operand1) + (+operand2);
                break;
            case "-":
                operand1 = operand1 - operand2;
                break;
            case "*":
                operand1 = operand1 * operand2;
                break;
            case "/":
                if(operand2 === "0"){

                    resScreen.textContent = "ERROR";
                    errors.style.border = "4px solid red"
                    resScreen.style.color = "red"
                    operand1 = "";
                    operand2 = "";
                    operator = "";
                    return;

                }
                operand1 = operand1 / operand2;
                break;
        }
        result = true;
        resScreen.innerHTML = operand1;
    }
})