import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Filters from '../../components/Filters/Filters';
import FillInTheBlanks from '../../FillInTheBlanks/FillInTheBlanks';
import { BLANK_XS } from '../../constants';
import Heading from './Heading';
import tagBySlug from './tagBySlug';

function PromptsPage({ fitbs, tags }) {
  const { id, slug } = useParams();
  const tag = tagBySlug({ slug, tags });
  const fitb = fitbs.find(fitb => fitb.id === id);
  return (
    <>
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
      <Heading title="TeamPrompts" />
      <Filters
        allOff={true}
        filter={{ name: tag.name }}
        fitbs={fitbs}
        onClick={console.log}
        tags={tags}
      />
      <ul>
        {fitb &&
          [fitb].map(fitb => (
            <li key={fitb.id}>
              <FillInTheBlanks fitb={fitb} tag={tag} />
            </li>
          ))}
      </ul>
    </>
  );
}

export default PromptsPage;
