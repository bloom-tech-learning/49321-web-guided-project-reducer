export const ADD = "ADD";

export const addAction = (value)=>{
    return({type:ADD, payload: value});
}

export const subAction = (value)=>{
    return({type:"SUBTRACT", payload: value});
}

export const clearAction = ()=>{
    return({type:"CLEAR"});
}

export const addToMemoryAction = ()=>{
    return({type:"ADD_TO_MEMORY"});
}