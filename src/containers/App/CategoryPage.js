import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Filters from '../../components/Filters/Filters';
import FillInTheBlanks from '../../FillInTheBlanks/FillInTheBlanks';
import Heading from './Heading';
import tagBySlug from './tagBySlug';
import { useAmplitude } from '../../instrumentation/AmplitudeHookProvider';
import { viewCollection } from '../../instrumentation/events';

function fitbsByTag({ fitbs, tag, tags }) {
  return fitbs.filter(fitb => fitb.tags.includes(tag.id));
}

function CategoryPage({ fitbs, history, tags }) {
  const { slug } = useParams();
  const tag = tagBySlug({ slug, tags });

  const { logEvent } = useAmplitude();
  const { properties, type } = viewCollection;

  useEffect(() => {
    logEvent(type, properties({ counter: 'TBD', tag }));
  }, [logEvent, properties, tag, type]);

  return (
    <>
      <Heading title="TeamPrompts" />
      <Filters filter={{ name: tag.name }} fitbs={fitbs} tags={tags} />
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
