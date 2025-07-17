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

    clearStack() {
        this.stackA = [];
        this.stackB = [];
    }
}

let Stack = new stack();
let outputStackA = document.getElementById('output_stack_A');
let outputStackB = document.getElementById('output_stack_B');
let searchWord = /[A-Za-z0-9]+\b/gm;
let filteredWord;

export const viewStacks = () => {
    let viewStackA = Stack.stackA.map((element, index) => `<strong>${index}:</strong>${element} `);
    let viewStackB = Stack.stackB.map((element, index) => `<strong>${index}:</strong>${element} `);
    outputStackA.innerHTML = `PILA A:
[
    ${viewStackA}
]`;

    outputStackB.innerHTML = `PILA B:
[
    ${viewStackB}
]`;
}

export const actionInput = () => {
    Stack.clearStack();
    filteredWord = input.value.match(searchWord);
    viewStacks();
};

export const stackAfull = () => {
    if (Stack.stackA.length === filteredWord.length) {
        return true;
    } else if (Stack.stackA.length < filteredWord.length) {
        return false;
    }

}

export const stackBfull = () => {
    if (Stack.stackB.length === filteredWord.length) {
        return true;
    } else if (Stack.stackB.length < filteredWord.length) {
        return false;
    }

}

export const stackEmpty = () =>{
    if (Stack.stackA.length === 0 && Stack.stackB.length === 0) {
        return false;
    }
}


export const actionButtonA = (input) => {//input de textarea
    let lastElementStackB = Stack.stackB[Stack.stackB.length - 1];
    if (Stack.stackA.length === 0 && Stack.stackB.length === 0) {
        for (let i = 0; i < filteredWord.length; i++) {
            Stack.insertStackA = filteredWord[i];
        }
        input.value = "";
    } else if (Stack.stackB.length > 0) {
        Stack.insertStackA = lastElementStackB;
    }
    viewStacks();
};

export const actionButtonB = () => {
    let lastElementStackA = Stack.stackA[Stack.stackA.length - 1];
    Stack.insertStackB = lastElementStackA;
    viewStacks();
};

document.querySelector("body").addEventListener("load", viewStacks);

// export { stackBfull,stackAfull,stackEmpty,actionButtonA,actionButtonB,actionInput };