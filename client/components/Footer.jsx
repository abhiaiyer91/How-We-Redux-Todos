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
