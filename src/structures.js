import { stackAfull, stackBfull, viewStacks, stackEmpty, actionButtonA, actionButtonB, actionInput } from "./stack.js";
import  { structureArray } from "./array.js";
let structure;
let selectStructure = document.querySelectorAll("option");
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

// structure = structureArray;

// selectStructure.forEach((option)=>{
//     let opt = option.getAttribute("data-structure");
//     option.addEventListener("click", ()=> {
//         switch(opt){
//             case "array": structure = structureArray;
//                 break;
//             case "pila": structure = stack;
//             default: structure = structureArray;
//                 break;
//             }
//     })
// });
structure = structureArray;
input.addEventListener("input", () => {
    structure.actionInput(input);
    structure.viewData();
    activateButtonA();
    desactivateButtonB()
});

buttonA.addEventListener("click", () => {
    structure.actionButtonA(input);
    structure.stateButtonA(buttonA);
    structure.stateButtonB(buttonB);
    structure.viewData();
    input.value = "";
});

buttonB.addEventListener("click", () => {
    structure.actionButtonB();
    structure.stateButtonB(buttonB);
    structure.stateButtonA(buttonA);
    structure.viewData();
});

structure.viewData();