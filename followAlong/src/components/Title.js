import reducer, { initialState} from './../reducers';
import React, { useState, useReducer } from 'react';

import { toggleEditing } from './../actions';

const Title = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("current state: ", state);

  // const [title, setTitle] = useState('Hello earthlings!');
  // const [editing, setEditing] = useState(false);
  // const [newTitleText, setNewTitleText] = useState('');

  const handleChanges = e => {
    // setNewTitleText(e.target.value);
  };

  const handleEditing = () => {
    // setEditing(!editing);
    dispatch();
  }

  const handleFormSubmit = () => {
    // setTitle(newTitleText);
    // setEditing(false);
  }

  return (
    <div>
      {!state.editing ? (
        <h1>
          {state.title}{' '}
          <i onClick={handleEditing} className="far fa-edit" />
        </h1>
      ) : (
        <div>
          <input
            className="title-input"
            type="text"
            name="newTitleText"
            value={state.newTitleText}
            onChange={handleChanges}
          />
          <button
            onClick={handleFormSubmit}
          >
            Update title
          </button>
        </div>
      )}
    </div>
  );
};

export default Title;