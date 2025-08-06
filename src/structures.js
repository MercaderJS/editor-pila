import { stackAfull, stackBfull, viewStacks, stackEmpty, actionButtonA, actionButtonB, actionInput } from "./stack.js";

let structure;
let selectStructure = document.querySelector("select").value;
let input = document.getElementById("textarea_write");
let buttonA = document.getElementById("button_A");
let buttonB = document.getElementById("button_B");
let activateButtonA = ()=> buttonA.removeAttribute("disabled");
let activateButtonB = ()=> buttonB.removeAttribute("disabled");
let desactivateButtonA = ()=> buttonA.setAttribute("disabled","disabled");
let desactivateButtonB = ()=> buttonB.setAttribute("disabled","disabled");

let stack = {
    viewData: viewStacks,
    stateButtonA: () => {
        if (stackAfull()) {
            desactivateButtonA();
        }else{
            activateButtonA();
        }
    },
    stateButtonB: () => {
        if (stackBfull()) {
            desactivateButtonB();
        }else{
            activateButtonB();
        }
    },
    stateButtons: () => {
        if (stackEmpty()) {
            desactivateButtonA();
            desactivateButtonB();
        }
    },
    actionbuttonA: actionButtonA,
    actionbuttonB: actionButtonB,
    actionInput,
};


switch (selectStructure) {
    case "pila": structure = stack;
        break;
    //     case array: 
    //     case lista:
    //     case cola:
}

input.addEventListener("input", () => {
    structure.actionInput(input.value);
    activateButtonA();
    desactivateButtonB()
});

buttonA.addEventListener("click", () => {
    structure.actionbuttonA();
    structure.stateButtonA();
    structure.stateButtonB();
    input.value = "";
});

buttonB.addEventListener("click", () => {
    structure.actionbuttonB();
    structure.stateButtonB();
    structure.stateButtonA();
});

document.querySelector("body").addEventListener("load", structure.viewData());
