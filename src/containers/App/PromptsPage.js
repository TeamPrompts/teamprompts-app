import React from 'react';
import { useParams } from 'react-router-dom';
import Filters from '../../components/Filters/Filters';
import FillInTheBlanks from '../../FillInTheBlanks/FillInTheBlanks';
import Heading from './Heading';
import tagBySlug from './tagBySlug';
import { pageTypes } from '../../constants';

function PromptsPage({ fitbs, history, tags }) {
  const { id, slug } = useParams();
  const tag = tagBySlug({ slug, tags });
  const fitb = fitbs.find(fitb => fitb.id === id);
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
