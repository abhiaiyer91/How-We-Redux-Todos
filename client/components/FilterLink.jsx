FilterLink = ({ dispatch, filter, visibilityFilter, children }) => {
  const setFilter = () => {
    dispatch(setVisibilityFilter(filter));
    dispatch(changePage(0));
  }
  return (
    <Link active={visibilityFilter === filter} onClick={()=> {return setFilter()}}>
      {children}
    </Link>
  )
};
