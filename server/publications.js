Meteor.publish('getAllTodos', function (filter) {
  switch (filter) {
    case 'SHOW_ALL':
      return Todos.find();
    case 'SHOW_COMPLETED':
      return Todos.find({completed: true});
    case 'SHOW_ACTIVE':
      return Todos.find({completed: false});
    default:
      return Todos.find();
  }
});
