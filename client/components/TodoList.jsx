TodoList = class TodoList extends React.Component {
  constructor() {
    super();
  }

  getMeteorData() {
    const todoSub = Meteor.subscribe('getAllTodos', Store.getReactiveState('visibilityFilter'));
    return {
      todoSubReady: todoSub.ready(),
      todoList: Todos.find().fetch() || []
    }
  }

  render() {
    const todos = this.data.todoList;
    return (
      <ul>
        {todos.map(todo =>
            <Todo
              key={todo._id}
              {...todo}
              onClick={() => Store.dispatch(toggleTodo(todo._id))}
              />
        )}
      </ul>
    )
  }
};

reactMixin(TodoList.prototype, ReactMeteorData);
