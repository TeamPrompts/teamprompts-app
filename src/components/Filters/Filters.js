import React from 'react';

function Item({ onClick, tag }) {
  return (
    <li className="mx-1 my-1">
      <button
        className="bg-blue-500 font-bold focus:outline-none hover:bg-blue-700 px-4 rounded-full text-white"
        data-testid={tag.name}
        onClick={() => onClick(tag)}
        type="button"
      >
        {tag.name}
      </button>
    </li>
  );
}

function Filters({ onClick, tags }) {
  return (
    <ul className="flex flex-wrap">
      <Item onClick={onClick} tag={{ name: 'all' }} />
      {tags.map(tag => (
        <Item key={tag.id} onClick={onClick} tag={tag} />
      ))}
    </ul>
  );
}

export default Filters;
