import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Filters from '../../components/Filters/Filters';
import FillInTheBlanks from '../../FillInTheBlanks/FillInTheBlanks';
import { useAmplitude } from '../../instrumentation/AmplitudeHookProvider';
import { viewPromptDetail } from '../../instrumentation/events';
import { pageTypes } from '../../constants';
import Heading from './Heading';
import tagBySlug from './tagBySlug';

function PromptsPage({ fitbs, history, match: { url }, tags }) {
  const { id, slug } = useParams();
  const tag = tagBySlug({ slug, tags });
  const fitb = fitbs.find(fitb => fitb.id === id);

  const { logEvent } = useAmplitude();
  const { properties, type } = viewPromptDetail;

  useEffect(() => {
    if (fitb) {
      logEvent(type, properties({ fitb, tag, url }));
    }
  }, [fitb, logEvent, properties, tag, type, url]);

  return (
    <>
      <Heading title="TeamPrompts" />
      <Filters filter={{ name: tag.name }} fitbs={fitbs} tags={tags} />
      <ul>
        {fitb &&
          [fitb].map(fitb => (
            <li key={fitb.id}>
              <FillInTheBlanks
                fitb={fitb}
                history={history}
                pageType={pageTypes.PromptsPage}
                tag={tag}
              />
            </li>
          ))}
      </ul>
    </>
  );
}

export default PromptsPage;
