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

const PER_PAGE_SKIP = 10;

const pageSkip = (state = 0, action = {}) => {
  switch (action.type) {
    case 'MODERATION_CHANGE_PAGE':
      // take the currentPageNumber from the payload
      return action.data.currentPageNumber * PER_PAGE_SKIP;
    default:
      return state;
  }
};

