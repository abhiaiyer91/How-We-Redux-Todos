TodoApp = () => (
  <div className="todo-container">
    <AddTodo {...Store}/>
    <TodoList {...Store}/>
    <Footer {...Store}/>
  </div>
);

Meteor.startup(()=> {
  ReactDOM.render(
    <TodoApp />,
    document.getElementById('app')
  );
});
