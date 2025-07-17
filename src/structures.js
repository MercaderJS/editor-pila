import { stackAfull,stackBfull,viewStacks,stackEmpty,actionButtonA,actionButtonB,actionInput } from "./stack.js";


let stack = {
    viewData: viewStacks,
    isStackAfull: ()=> stackAfull(),
    isStackBfull: ()=> stackBfull(),
    isStackEmpty: ()=> stackEmpty(),
    buttonStackA: ()=> actionButtonA(),
    buttonStackB: ()=> actionButtonB(),
    actionInput:  ()=> actionInput(),
};