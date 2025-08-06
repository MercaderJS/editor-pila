class array {//tener en cuenta que este array es dinamico y el metodo de eliminacion de cada elemento se descartó
    constructor() {
        this.arrayA = ["dhdw", "j9wdj9w", "dw9dhw9"];
        this.arrayB = ["dhdw", "j9wdj9w", "dw9dhw9"];
    }

    addElementArrayA(index, element) {
        if (this.arrayA.length === 0) {
            this.arrayA.push(element);

        } else {
            this.arrayA.splice(index, 1, element);
            this.arrayB.pop(element);
        }
    }

    addElementArrayB(index, element) {
        if (this.arrayA.length <= 0) {
            return;
        } else {
            this.arrayB.splice(index, 1, element);
            this.arrayA.pop(element);

        }
    }

    deleteAllElements() {
        this.arrayA = [];
        this.arrayB = [];
    }

    getElementArrayA(index) {
        return this.arrayA[index];
    }

    getElementArrayB(index) {
        return this.arrayB[index];
    }

}

let Array = new array();
let outputA = document.getElementById('output-A');
let outputB = document.getElementById('output-B');
let elementsDialog = document.getElementById("list-element");
let indexElementsDialog = document.getElementById("list-index");
let searchWord = /[A-Za-z0-9]+\b/gm;
let filteredWord;


const viewElements = () => {
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

const viewElementsDialog = (arr) => {
    return arr.map((element, index) => `<li value="${element}">${element}</li>`);
}

const viewIndexDialog = (arr) => {
    return arr.map((element, index) => `<li value="${element}">${index}</li>`);
}

const actionInput = (input) => {
    Array.deleteAllElements();
    filteredWord = input.match(searchWord);
    viewElements();
};

const actionButtonA = (input) => {
    if (Array.arrayA.length === 0 && Array.arrayB.length === 0) {
        Array.addElementArrayA = filteredWord;
        input.value = "";
    } else {
    }
    
}

document.getElementById("button_A").addEventListener("click",()=>{
    let dialog = document.querySelector("dialog");
    dialog.showModal();
    document.getElementById("list-element").innerHTML = viewElementsDialog(Array.arrayA);
    document.getElementById("list-index").innerHTML = viewIndexDialog(Array.arrayA);


})