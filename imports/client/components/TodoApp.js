import React from 'react';
import AddTodo from '../../../imports/client/components/AddTodo';
import TodoList from '../../../imports/client/components/TodoList';
import Footer from '../../../imports/client/components/Footer';
import DevTools from '../../../imports/client/components/DevTools';

export default function TodoApp() {
  return (
    <div className='todo-container'>
      <DevTools />
      <AddTodo/>
      <TodoList/>
      <Footer/>
    </div>
  );
}
