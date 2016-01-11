const { connect } = ReactRedux;

TodoList = class TodoList extends React.Component {
  getMeteorData() {
    const { pageSkip, visibilityFilter} = this.props;
    const todoSub = Meteor.subscribe('getTodos', visibilityFilter, pageSkip);
    return {
      todoSubReady: todoSub.ready(),
      todoList: Todos.find({}, {limit: 10}).fetch() || [],
      todoCount: Counts.get('TodoCount')
    }
  }

  render() {
    const { dispatch } = this.props;
    const todos = this.data.todoList;
    const pagination = this.data.todoCount > 10 ? <TodoPagination
      handlePageClick={(data)=> {return dispatch({type: 'CHANGE_PAGE', currentPageNumber: data.selected})}}
      pageCount={this.data.todoCount/10}/> : '';
    return (
      <div>
        <ul>
          {todos.map(todo =>
              <Todo
                key={todo._id}
                {...todo}
                onClick={() => dispatch(toggleTodo(todo._id))}
                />
          )}
        </ul>
        {pagination}
      </div>
    )
  }
};

reactMixin(TodoList.prototype, ReactMeteorData);

const mapStateToProps = (state) => {
  return {
    visibilityFilter: state.visibilityFilter,
    pageSkip: state.pageSkip
  }
};

TodoList = connect(mapStateToProps)(TodoList);
