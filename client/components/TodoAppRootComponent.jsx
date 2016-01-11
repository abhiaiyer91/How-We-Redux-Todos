const { Provider } = ReactRedux;

TodoAppRoot = () => {
  return (
    <div className="todo-container">
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

