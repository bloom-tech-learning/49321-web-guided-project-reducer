import { TOGGLE_EDITING } from './../actions';

export const initialState = {
    title: "Hello Earthling",
    editing: false,
    newTitleText: ""
}

//{type: "TOGGLE_EDITING"}
const reducer = (state, action) => {
    console.log('3. Enters the reducer.');
    if (action.type === TOGGLE_EDITING) {
        console.log('4. Executes toggle editting.');
        return({
            ...state,
            editing: !state.editing
        });
    }

    return(state);
}

export default reducer;