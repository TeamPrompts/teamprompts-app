import React from 'react';
import Filters from '../../components/Filters/Filters';
import FillInTheBlanks from '../../FillInTheBlanks/FillInTheBlanks';
import Breadcrumbs from './Breadcrumbs';
import Heading from './Heading';

function HomePage({ fitbs, history, tags }) {
  return (
    <>
      <Breadcrumbs />
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
            <FillInTheBlanks fitb={fitb} hystory={history} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default HomePage;
