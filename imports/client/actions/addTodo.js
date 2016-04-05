export default function addTodo(text) {
  return () => {
    Meteor.call('addTodo', text);
  };
};
