const { combineReducers } = Redux;


const visibilityFilter = (state = 'SHOW_ALL', action = {}) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

const PER_PAGE_SKIP = 10;
const pageSkip = (state = 0, action = {}) => {
  switch (action.type) {
    case 'CHANGE_PAGE':
      // take the currentPageNumber from the payload
      return action.currentPageNumber * PER_PAGE_SKIP;
    default:
      return state;
  }
};

rootReducer = combineReducers({
  visibilityFilter,
  pageSkip
});
