export const TOGGLE_EDITING = "TOGGLE_EDITING";

export const toggleEditing = () => {
    console.log("2. Action Creator called.");
    return({type: TOGGLE_EDITING});
}
