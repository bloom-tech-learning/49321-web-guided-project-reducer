import React, { useReducer } from "react";
import reducer, { initialState} from './reducers/calcReducer';
import {addAction, clearAction, subAction} from './actions/calcActions';

import "./styles.css";


// let currentState = initialState;
// console.log("currentState: ", currentState);

// currentState = reducer(currentState, addAction(3));
// console.log("currentState: ", currentState);

// currentState = reducer(currentState, addAction(4));
// console.log("currentState: ", currentState);

// currentState = reducer(currentState, clearAction());
// console.log("currentState: ", currentState);

// currentState = reducer(currentState, subAction(10));
// console.log("currentState: ", currentState);

// currentState = reducer(currentState, {type:"ADD", payload: 5});
// console.log("currentState: ", currentState);

// currentState = reducer(currentState, {type:"SUBTRACT", payload: 6});
// console.log("currentState: ", currentState);

// currentState = reducer(currentState, {type:"ADD_TO_MEMORY"});
// console.log("currentState: ", currentState);

// currentState = reducer(currentState, {type:"CLEAR"});
// console.log("currentState: ", currentState);

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log("currentState: ", state);

  return (
    <div className="App">
      <textarea rows="1" value={state.currentValue} id="total" type="text" name="ans"></textarea>
      <br />
      <button type="button" className="btn">
        +
      </button>
    </div>
  );
}
