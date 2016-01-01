Link = ({
  active,
  children,
  onClick
  }) => {
  if (active) {
    return <span>{children}</span>;
  }

  return (
    <a href='#'
       onClick={e => {
         e.preventDefault();
         onClick();
       }}
      >
      {children}
    </a>
  );
};
