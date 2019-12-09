import React from 'react';
import { Link } from 'react-router-dom';
import { BLANK_XS, pageTypes } from '../../constants';

function Breadcrumbs({ pageType, tag }) {
  switch (pageType) {
    case pageTypes.CategoryPage:
      return (
        <div className="mt-2">
          <Link className="text-indigo-700 underline" to="/">
            Home
          </Link>
          {' > '}
          <span className="capitalize">{tag.name}</span>
        </div>
      );
    case pageTypes.HomePage:
    default:
      return <div className="mt-2">&nbsp;</div>;
    case pageTypes.PromptsPage:
      return (
        <div className="mt-2">
          <Link className="text-indigo-700 underline" to="/">
            Home
          </Link>
          {' > '}
          <Link
            className="capitalize text-indigo-700 underline"
            to={`/${tag.slug}`}
          >
            {tag.name}
          </Link>
          {' > '}
          {BLANK_XS}
        </div>
      );
  }
}

export default Breadcrumbs;
