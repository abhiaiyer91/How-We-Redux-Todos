export default function toggleTodo(id) {
  return () => {
    Meteor.call('toggleTodo', id);
  };
};
