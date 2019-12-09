import React from 'react';
import { useParams } from 'react-router-dom';
import Filters from '../../components/Filters/Filters';
import FillInTheBlanks from '../../FillInTheBlanks/FillInTheBlanks';
import { pageTypes } from '../../constants';
import Heading from './Heading';
import Breadcrumbs from './Breadcrumbs';
import tagBySlug from './tagBySlug';

function PromptsPage({ fitbs, tags }) {
  const { id, slug } = useParams();
  const tag = tagBySlug({ slug, tags });
  const fitb = fitbs.find(fitb => fitb.id === id);
  return (
    <>
      <Breadcrumbs pageType={pageTypes.PromptsPage} tag={tag} />
      <Heading title="TeamPrompts" />
      <Filters
        allOff={true}
        filter={{ name: tag.name }}
        fitbs={fitbs}
        onClick={console.log}
        tags={tags}
      />
      <ul>
        {fitb &&
          [fitb].map(fitb => (
            <li key={fitb.id}>
              <FillInTheBlanks fitb={fitb} tag={tag} />
            </li>
          ))}
      </ul>
    </>
  );
}

export default PromptsPage;
