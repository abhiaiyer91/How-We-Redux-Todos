addTodo = (text) => {
  return () => {
    Meteor.call('addTodo', text);
  };
};

toggleTodo = (id) => {
  return () => {
    Meteor.call('toggleTodo', id);
  };
};

setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  };
};
