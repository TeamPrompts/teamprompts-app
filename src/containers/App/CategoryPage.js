import React from 'react';
import { useParams } from 'react-router-dom';
import Filters from '../../components/Filters/Filters';
import FillInTheBlanks from '../../FillInTheBlanks/FillInTheBlanks';
import Heading from './Heading';
import tagBySlug from './tagBySlug';

function fitbsByTag({ fitbs, tag, tags }) {
  return fitbs.filter(fitb => fitb.tags.includes(tag.id));
}

function CategoryPage({ fitbs, history, tags }) {
  const { slug } = useParams();
  const tag = tagBySlug({ slug, tags });
  return (
    <>
      <Heading title="TeamPrompts" />
      <Filters
        filter={{ name: tag.name }}
        fitbs={fitbs}
        onClick={() => {}}
        tags={tags}
      />
      <ul>
        {fitbsByTag({ fitbs, tag, tags }).map(fitb => (
          <li key={fitb.id}>
            <FillInTheBlanks fitb={fitb} history={history} tag={tag} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default CategoryPage;
