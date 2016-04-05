import React from 'react';

export default function Link({ active, children, onClick }) {
  if (active) {
    return <span>{children}</span>;
  }

  return (
    <a href='#'
       onClick={function(e) {
         e.preventDefault();
         onClick();
       }}
    >
      {children}
    </a>
  );
}
