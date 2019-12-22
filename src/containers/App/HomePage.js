import React, { useEffect } from 'react';
import tagAll from '../../api/tagAll';
import Filters from '../../components/Filters/Filters';
import FillInTheBlanks from '../../FillInTheBlanks/FillInTheBlanks';
import { useAmplitude } from '../../instrumentation/AmplitudeHookProvider';
import { viewHome } from '../../instrumentation/events';
import Heading from './Heading';

function HomePage({ fitbs, history, match: { url }, tags }) {
  const { logEvent } = useAmplitude();
  const { properties, type } = viewHome;

  useEffect(() => {
    logEvent(type, properties({ url }));
  }, [logEvent, properties, type, url]);

  return (
    <>
      <Heading title="TeamPrompts" />
      <Filters filter={tagAll} fitbs={fitbs} tags={tags} />
      <ul>
        {fitbs.map((fitb, index) => (
          <li key={fitb.id}>
            <FillInTheBlanks
              fitb={fitb}
              history={history}
              viewPosition={index}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default HomePage;
