FilterLink = ({ dispatch, filter, visibilityFilter, children }) => {
  return (
    <Link active={visibilityFilter === filter} onClick={()=> {return dispatch(setVisibilityFilter(filter))}}>
      {children}
    </Link>
  )
};
