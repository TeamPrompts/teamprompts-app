import classnames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import { tagAll } from '../../App';
import slugify from '../../slugify';

const { PUBLIC_URL } = process.env;

function Item({ counter, filter, onClick, tag }) {
  return (
    <li className="mx-1 my-1">
      <Link to={`${PUBLIC_URL}/${slugify(tag.name)}`}>
        <button
          className={classnames(
            'focus:outline-none hover:bg-blue-700 px-4 rounded-full text-white',
            {
              'bg-blue-500': tag.name !== filter.name,
              'bg-blue-900': tag.name === filter.name
            }
          )}
          data-testid={tag.name}
          onClick={() => onClick(tag)}
          type="button"
        >
          {`${tag.name} (${counter})`}
        </button>
      </Link>
    </li>
  );
}

function Filters({ filter, fitbs, onClick, tags }) {
  const counters = fitbs.reduce((accumulator, current) => {
    current.tags.forEach(tag => {
      if (accumulator[tag]) {
        accumulator[tag] += 1;
      } else {
        accumulator[tag] = 1;
      }
    });
    return accumulator;
  }, {});

  return (
    <ul className="flex flex-wrap">
      <Item
        counter={fitbs.length}
        filter={filter}
        onClick={onClick}
        tag={tagAll}
      />
      {tags.map(tag => (
        <Item
          counter={counters[tag.id]}
          filter={filter}
          key={tag.id}
          onClick={onClick}
          tag={tag}
        />
      ))}
    </ul>
  );
}

export default Filters;
