import React  from 'react';
import ReactDOM  from 'react-dom';
import { Provider } from 'react-redux';
import Store from '../../imports/client/store/store';
import TodoApp from '../../imports/client/components/TodoApp';

function TodoAppRoot() {
  return (
    <div className='todo-container'>
      <Provider store={Store}>
        <TodoApp/>
      </Provider>
    </div>
  );
}

Meteor.startup(()=> {
  ReactDOM.render(
    <TodoAppRoot />,
    document.getElementById('app')
  );
});
