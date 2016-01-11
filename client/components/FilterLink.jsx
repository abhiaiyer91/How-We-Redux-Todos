const { connect } = ReactRedux;

FilterLink = () => {
  const { dispatch, filter, visibilityFilter, children } = this.props;
  return (
    <Link active={visibilityFilter === filter} onClick={()=> {dispatch(setVisibilityFilter(filter))}}>
      {children}
    </Link>
  )
};


const mapStateToProps = (state) => {
  return {
    visibilityFilter: state.visibilityFilter
  }
};

FilterLink = connect(mapStateToProps)(FilterLink);
