class array {//tener en cuenta que este array es dinamico y el metodo de eliminacion de cada elemento se descartó
    constructor() {
        this.arrayA = [];
        this.arrayB = [];
    }

    addElementArrayA(index, element) {
        if (element === null) {
            return;
        }
        if (this.arrayB.length === 0 && this.arrayA.length >= 0) {
            this.arrayA = [...element];
        } 
        else if (this.arrayA.length >= 0 && this.arrayB.length > 0){
            index[1] === undefined ? this.arrayA.push(element) : this.arrayA.splice(index[1], 0, element);
            this.arrayB.splice(index[0],1);
        }
    }

    addElementArrayB(index, element) {
        if (element === null) {
            return
        } if (this.arrayA.length === 0) {
            return;
        } else if (this.arrayB.length >= 0 && this.arrayA.length > 0) {
            index[1] === undefined ? this.arrayB.push(element) : this.arrayB.splice(index[1], 0, element);
            this.arrayA.splice(index[0],1);            
        }
    }

    deleteAllElements() {
        this.arrayA = [];
        this.arrayB = [];
    }
// Aun no se para que carajo los voy a usar
    getElementArrayA(index) {
        return this.arrayA[index];
    }

    getElementArrayB(index) {
        return this.arrayB[index];
    }
    
}

// arrays 
let Array = new array();
let outputA = document.getElementById('output-A');
let outputB = document.getElementById('output-B');
let searchWord = /[A-Za-z0-9]+\b/gm;
let filteredWord;

// dialog
let dialog;
let buttonDialog;
let elementDialogSelected;
let indexesDialogSelected = [];
let ulElementsDialog = document.getElementById("list-element");
let ulIndexElementsDialog = document.getElementById("list-index");
let elementsDialog;
let indexElementsDialog;
let isDialogArrayA;

// let input = document.getElementById("textarea_write");


const viewData = () => {
    let viewArrayA = Array.arrayA.map((element, index) => `<strong>${index}:</strong>${element} `);
    let viewArrayB = Array.arrayB.map((element, index) => `<strong>${index}:</strong>${element} `);
    outputA.innerHTML = `CONTENEDOR A:
[
    ${viewArrayA} 
]`;

    outputB.innerHTML = `CONTENEDOR B:
[
    ${viewArrayB}
]`;
}


const actionInput = (input) => {
    Array.deleteAllElements();
    filteredWord = input.value.match(searchWord);
};

const viewElementsDialog = (arr) => {
    return arr.map((element, index) => `<li id="element-dialog" value="${element}">${element}</li>`);
}

const viewIndexDialog = (arr) => {
    return arr.map((element, index) => `<li id="index-element-dialog" value="${index}">${index}</li>`);
}

const getDataDialog = (index,element)=> {// ==========Averiguar porque se ejecuta mas de una vez tras cada llamada=========
    isDialogArrayA ? Array.addElementArrayA(index,element) : Array.addElementArrayB(index,element);
}

const actionButtonA = (input) => {
    if (input.value != "") {
        Array.addElementArrayA(indexesDialogSelected,filteredWord);
        
    } else {
        
    isDialogArrayA = true;
    dialog = document.querySelector("dialog");
    buttonDialog = document.getElementById("button-dialog");
    
    document.getElementById("list-element").innerHTML = viewElementsDialog(Array.arrayB);
    document.getElementById("list-index").innerHTML = viewIndexDialog(Array.arrayA);
    elementsDialog = document.querySelectorAll("#element-dialog");
    indexElementsDialog = document.querySelectorAll("#index-element-dialog");

    dialog.showModal();
    elementsDialog.forEach((element, index)=> element.addEventListener("click",()=> {
        indexesDialogSelected.splice(0, 1, index);
        elementDialogSelected = element.getAttribute("value");
        
    }));

    indexElementsDialog.forEach((element, index)=> element.addEventListener("click", ()=>{
        indexesDialogSelected.splice(1, 1, index);
        
    }));

    buttonDialog.addEventListener("click", ()=> {
        getDataDialog(indexesDialogSelected, elementDialogSelected);
        elementDialogSelected = null;
        indexesDialogSelected = [];
        isDialogArrayA = false;
        dialog.close();
        return;
    })
}
}



const actionButtonB = ()=> {
    isDialogArrayA = false;
    dialog = document.querySelector("dialog");
    buttonDialog = document.getElementById("button-dialog");
    
    document.getElementById("list-element").innerHTML = viewElementsDialog(Array.arrayA);
    document.getElementById("list-index").innerHTML = viewIndexDialog(Array.arrayB);
    elementsDialog = document.querySelectorAll("#element-dialog");
    indexElementsDialog = document.querySelectorAll("#index-element-dialog");

    dialog.showModal();
    elementsDialog.forEach((element, index)=> element.addEventListener("click",()=> {
        indexesDialogSelected.splice(0, 1, index);
        elementDialogSelected = element.getAttribute("value");
        
    }));

    indexElementsDialog.forEach((element, index)=> element.addEventListener("click", ()=>{
        indexesDialogSelected.splice(1, 1, index);
        
    }));

    buttonDialog.addEventListener("click", ()=> {
        getDataDialog(indexesDialogSelected, elementDialogSelected);
        elementDialogSelected = null;
        indexesDialogSelected = [];
        isDialogArrayA = true;
        dialog.close();
        viewData();
        return;
    });
    
}

const stateButtons = (button)=> {
    if (Array.arrayA.length === 0 &&  Array.arrayB.length === 0){
        button.setAttribute("disabled","disabled");
    }
    else{
        button.removeAttribute("disabled");
    } 
}

const stateButtonA = (button)=> {
    if(Array.arrayA.length > 0 && Array.arrayB.length === 0){
        button.setAttribute("disabled","disabled");
        console.log("A");
        
    } else {
        button.removeAttribute("disabled");
    }
}

const stateButtonB = (button)=> {
    if (Array.arrayB.length > 0 && Array.arrayA.length == 0){
        button.setAttribute("disabled","disabled");
        console.log("B");
        
    } else {
        button.removeAttribute("disabled");
    }
}

export const structureArray = {
    "viewData": viewData,
    "actionInput": actionInput,
    "actionButtonA": actionButtonA,
    "actionButtonB": actionButtonB,
    "stateButtons" : stateButtons,
    "stateButtonA":  stateButtonA,
    "stateButtonB":  stateButtonB
}