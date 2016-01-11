const { connect } = ReactRedux;

FilterLink = class FilterLink extends React.Component {
  getMeteorData() {
    const { filter, visibilityFilter} = this.props;
    const active = visibilityFilter === filter;
    return {
      active
    }
  }

  render() {
    const { dispatch, filter, children } = this.props;
    return (
      <Link active={this.data.active} onClick={()=> {dispatch(setVisibilityFilter(filter))}}>
        {children}
      </Link>
    )
  }
};

reactMixin(FilterLink.prototype, ReactMeteorData);

FilterLink = connect()(FilterLink);
