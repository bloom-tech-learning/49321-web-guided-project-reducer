import { TOGGLE_EDITING } from './../actions';

export const initialState = {
    title: "Hello Earthling",
    editing: false,
    newTitleText: ""
}

//{type: "TOGGLE_EDITING"}
const reducer = (state, action) => {
    if (action.type === TOGGLE_EDITING) {
        return({
            ...state,
            editing: !state.editing
        });
    }

    return(state);
}

export default reducer;