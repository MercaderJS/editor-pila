class stack {
    constructor() {
        this.stackA = [];
        this.stackB = [];
    }

    set insertStackA(value) {
            this.stackA.push(value);
            this.stackB.pop(value);
    }

    set insertStackB(value) {
        if (this.stackA.length > 0) {
            this.stackB.push(value);
            this.stackA.pop(value);
        }
    }

}

let Stack = new stack();

// textarea de escritura
const input = document.getElementById('textarea_write');

// textarea pila A
let outputStackA = document.getElementById('textarea_stack_A');

// textarea pila B
let outputStackB = document.getElementById('textarea_stack_B');
let searchWord = /\s*[A-Za-z0-9]+\b/gm;

//botones
const buttonA = document.getElementById('button_A');
const buttonB = document.getElementById('button_B');

buttonA.addEventListener("click", () => {

    let filteredWord = input.value.match(searchWord);
    let lastElementStackB = Stack.stackB[Stack.stackB.length -1]
    
    if (Stack.stackA.length === 0 && Stack.stackB.length === 0) {
        for (let i = 0; i < filteredWord.length; i++) {
            Stack.insertStackA = filteredWord[i];
        }
        input.value = "";
    }else if(Stack.stackB.length > 0){
        Stack.insertStackA = lastElementStackB;
    }

    outputStackA.value = Stack.stackA;
    outputStackB.value = Stack.stackB;
    console.log("StacK A ", Stack.stackA);
});

buttonB.addEventListener("click", () => {
    let lastElementStackA = Stack.stackA[Stack.stackA.length - 1]; 

    Stack.insertStackB = lastElementStackA;
    outputStackB.value = Stack.stackB;
    outputStackA.value = Stack.stackA;
});