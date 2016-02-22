FilterLink = ({ dispatch, filter, visibilityFilter, children }) => {
  const setFilter = () => {
    dispatch(setVisibilityFilter(filter));
    dispatch({type: 'CHANGE_PAGE', currentPageNumber: 0});
  }
  return (
    <Link active={visibilityFilter === filter} onClick={()=> {return setFilter()}}>
      {children}
    </Link>
  )
};
