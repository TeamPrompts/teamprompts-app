import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Filters from '../../components/Filters/Filters';
import makeCounters from '../../components/Filters/makeCounters';
import FillInTheBlanks from '../../FillInTheBlanks/FillInTheBlanks';
import { useAmplitude } from '../../instrumentation/AmplitudeHookProvider';
import { viewCollection } from '../../instrumentation/events';
import Heading from './Heading';
import tagBySlug, { tagEmpty } from './tagBySlug';

function fitbsByTag({ fitbs, tag, tags }) {
  return fitbs.filter((fitb) => fitb.tags.includes(tag.id));
}

function CategoryPage({ fitbs, history, match: { url }, tags }) {
  const { slug } = useParams();
  const tag = tagBySlug({ slug, tags });

  const { logEvent } = useAmplitude();
  const { properties, type } = viewCollection;

  const counters = makeCounters({ fitbs });

  useEffect(() => {
    if (tag !== tagEmpty) {
      logEvent(type, properties({ counter: counters[tag.id], tag, url }));
    }
  }, [counters, logEvent, properties, tag, type, url]);

  return (
    <>
      <Heading title="TeamPrompts" />
      <Filters filter={{ name: tag.name }} fitbs={fitbs} tags={tags} />
      <ul>
        {fitbsByTag({ fitbs, tag, tags }).map((fitb, index) => (
          <li key={fitb.id}>
            <FillInTheBlanks
              fitb={fitb}
              history={history}
              tag={tag}
              viewPosition={index}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default CategoryPage;
