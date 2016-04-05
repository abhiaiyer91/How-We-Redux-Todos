import React from 'react';
import { connect } from 'react-redux';
import FilterLink from '../../../imports/client/components/FilterLink';

function Footer(props) {
  return (
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
}

const mapStateToProps = (state) => {
  return {
    visibilityFilter: state.visibilityFilter
  }
};

export default connect(mapStateToProps)(Footer);
