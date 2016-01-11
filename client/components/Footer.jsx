const { connect } = ReactRedux;

Footer = (props) => (
  <p>
    Show:
    {' '}
    <FilterLink filter='SHOW_ALL' {...props}>
      All
    </FilterLink>
    {', '}
    <FilterLink filter='SHOW_ACTIVE' {...props}>
      Active
    </FilterLink>
    {', '}
    <FilterLink filter='SHOW_COMPLETED' {...props}>
      Completed
    </FilterLink>
  </p>
);

const mapStateToProps = (state) => {
  return {
    visibilityFilter: state.visibilityFilter
  }
};

Footer = connect(mapStateToProps)(Footer);
