import React from 'react';
import Link from '../../../imports/client/components/Link';
import setVisibilityFilter from '../../../imports/client/actions/setVisibility';
import changePage from '../../../imports/client/actions/changePage';

export default function FilterLink({ dispatch, filter, visibilityFilter, children }) {
  const setFilter = () => {
    dispatch(setVisibilityFilter(filter));
    dispatch(changePage(0));
  };
  return (
    <Link active={visibilityFilter === filter} onClick={()=> {return setFilter()}}>
      {children}
    </Link>
  );
}
