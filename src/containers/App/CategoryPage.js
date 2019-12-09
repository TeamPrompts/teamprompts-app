import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Filters from '../../components/Filters/Filters';
import FillInTheBlanks from '../../FillInTheBlanks/FillInTheBlanks';
import Heading from './Heading';
import tagBySlug from './tagBySlug';

function fitbsByTag({ fitbs, tag, tags }) {
  return fitbs.filter(fitb => fitb.tags.includes(tag.id));
}

function CategoryPage({ fitbs, tags }) {
  const { slug } = useParams();
  const tag = tagBySlug({ slug, tags });
  return (
    <>
      <div className="mt-2">
        <Link className="text-indigo-700 underline" to="/">
          Home
        </Link>
        {' > '}
        <span className="capitalize">{tag.name}</span>
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
        {fitbsByTag({ fitbs, tag, tags }).map(fitb => (
          <li key={fitb.id}>
            <FillInTheBlanks fitb={fitb} tag={tag} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default CategoryPage;
