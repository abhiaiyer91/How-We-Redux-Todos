const todoPubFields = {
  text: 1,
  completed: 1
};

const getTodoPublication = function (filter) {
  let query = {};

  switch (filter) {
    case 'SHOW_COMPLETED':
      query.completed = true;
      break;
    case 'SHOW_ACTIVE':
      query.completed = false;
      break;
    default:
      break;
  }
  return Todos.find(query, todoPubFields);
};

Meteor.publish('getTodos', getTodoPublication);
