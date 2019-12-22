import classnames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import tagAll from '../../api/tagAll';
import makeCounters from './makeCounters';

function Item({ counter, filter, tag }) {
  return (
    <li className="mx-1 my-1">
      <Link to={`/${tag.slug}`}>
        <button
          className={classnames(
            'capitalize focus:outline-none hover:bg-blue-700 px-4 rounded-full text-white',
            {
              'bg-blue-500': tag.name !== filter.name,
              'bg-blue-900': tag.name === filter.name
            }
          )}
          data-testid={tag.name}
          type="button"
        >
          {`${tag.name} (${counter})`}
        </button>
      </Link>
    </li>
  );
}

function Filters({ filter, fitbs, tags }) {
  const counters = makeCounters({ fitbs });

  return (
    <ul className="flex flex-wrap mb-4">
      <Item counter={fitbs.length} filter={filter} tag={tagAll} />
      {tags.map(
        tag =>
          counters[tag.id] && (
            <Item
              counter={counters[tag.id]}
              filter={filter}
              key={tag.id}
              tag={tag}
            />
          )
      )}
    </ul>
  );
}

export default Filters;
