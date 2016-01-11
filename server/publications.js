const todoPubFields = {
  text: 1,
  completed: 1
};

const getTodoPublication = function (filter, pageSkip = 0) {
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
  Counts.publish(this, 'TodoCount', Todos.find(query));
  return Todos.find(query, {fields: todoPubFields, skip: pageSkip, limit: 10});
};

Meteor.publish('getTodos', getTodoPublication);
