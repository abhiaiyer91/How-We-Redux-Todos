import React from 'react';
import { connect } from 'react-redux';
import addTodo from '../../../imports/client/actions/addTodo';
function AddTodo({ dispatch }) {
  let input;
  return (
    <div>
      <input ref={function (node)  {
        input = node;
      }}/>
      <button onClick={function () {
        console.log('YO');
        dispatch(addTodo(input.value));
        input.value = '';
      }}>
        Add Todo
      </button>
    </div>
  );
}

export default connect()(AddTodo);
