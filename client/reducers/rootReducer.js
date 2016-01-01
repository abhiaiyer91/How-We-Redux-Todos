const { combineReducers } = Redux;


const visibilityFilter = (state = 'SHOW_ALL', action = {}) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

rootReducer = combineReducers({
  visibilityFilter
});
