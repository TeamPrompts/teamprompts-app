import React from 'react';
import Filters from '../../components/Filters/Filters';
import FillInTheBlanks from '../../FillInTheBlanks/FillInTheBlanks';
import Heading from './Heading';

function HomePage({ fitbs, tags }) {
  return (
    <>
      <div className="mt-2">&nbsp;</div>
      <Heading title="TeamPrompts" />
      <Filters
        allOff={true}
        filter={{}}
        fitbs={fitbs}
        onClick={console.log}
        tags={tags}
      />
      <ul>
        {fitbs.map(fitb => (
          <li key={fitb.id}>
            <FillInTheBlanks fitb={fitb} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default HomePage;
