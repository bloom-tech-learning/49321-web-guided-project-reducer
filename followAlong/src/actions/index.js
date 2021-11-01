export const TOGGLE_EDITING = "TOGGLE_EDITING";
export const CHANGE_TITLE_INPUT = "CHANGE_TITLE_INPUT";

export const toggleEditing = () => {
    console.log("2. Action Creator called.");
    return({type: TOGGLE_EDITING});
}

export const changeTitleInput = (input) => {
    return({type: CHANGE_TITLE_INPUT, payload: input});
}