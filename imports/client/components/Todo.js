import React from 'react';

export default function Todo({ onClick, completed, text }) {
  return (
    <li
      onClick={onClick}
      style={{textDecoration: completed ? 'line-through' : 'none'}}
    >
      {text}
    </li>
  );
}
