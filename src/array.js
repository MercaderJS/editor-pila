class array {//tener en cuenta que este array es dinamico
    constructor(){
        this.array = [];
    }

    set addElement(element){
        this.array.push(element);
    } 

    getElement(index){
        return this.array[index];
    }

}

