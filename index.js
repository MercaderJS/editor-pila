class stack {
    constructor() {
        this.stackA = [];
        this.stackB = [];
    }

    set insertStackA(value) {
        if (this.stackB.length <= 0) {
            this.stackA.push(value);
            this.stackB.pop(value);
        }
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
const buttonA = document.getElementById('button_A');
const buttonB = document.getElementById('button_B');

input.addEventListener("keyup", ()=> Stack.insertStackA = input.value);
botonA.addEventListener("click", ()=> Stack.insertStackA = Stack.stackB[Stack.stackB.length - 1]);
botonB.addEventListener("click", ()=> Stack.insertStackB = Stack.stackA[Stack.stackA.length - 1]);


botonA.addEventListener("click", ()=> console.log("stack A",Stack.stackA));
botonB.addEventListener("click", ()=> console.log("stack B",Stack.stackB));