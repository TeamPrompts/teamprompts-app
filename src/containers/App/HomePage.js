import React from 'react';
import tagAll from '../../api/tagAll';
import Filters from '../../components/Filters/Filters';
import FillInTheBlanks from '../../FillInTheBlanks/FillInTheBlanks';
import Heading from './Heading';

function HomePage({ fitbs, history, tags }) {
  return (
    <>
      <Heading title="TeamPrompts" />
      <Filters filter={tagAll} fitbs={fitbs} onClick={() => {}} tags={tags} />
      <ul>
        {fitbs.map(fitb => (
          <li key={fitb.id}>
            <FillInTheBlanks fitb={fitb} history={history} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default HomePage;
