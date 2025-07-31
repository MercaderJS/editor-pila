class array {//tener en cuenta que este array es dinamico y el metodo de eliminacion de cada elemento se descartó
    constructor() {
        this.arrayA = [];
        this.arrayB = [];
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
let dialog = document.querySelector("dialog");
let elementsDialog = document.getElementById("list-elements");
let indexElementsDialog = document.getElementById("list-index");
let searchWord = /[A-Za-z0-9]+\b/gm;
let filteredWord;


export const viewElements = () => {
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
    elementsDialog.innerHTML = arr.map((element) => {
      `<li id="element-dialog">
           ${element}
       </li>
      `
    });
  indexElementsDialog.innerHTML = arr.map((elemnt,index) => {                                   `<li id="element-dialog">                         ${index}
       </li>           
      `
  });
}

export const actionInput = (input) => {
    Array.deleteAllElements();
    filteredWord = input.match(searchWord);
    viewElements();
};

export const actionButtonA = (input) => {
    if (Array.arrayA.length === 0 && Array.arrayB.length === 0) {
        Array.addElementArrayA = filteredWord;
        input.value = "";
    } else {
        dialog.showModal();
  }

}
