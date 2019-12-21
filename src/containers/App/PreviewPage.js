import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ID } from '../../api/constants';
import selectFitbs from '../../api/selectFitbs';
import FillInTheBlanks from '../../FillInTheBlanks/FillInTheBlanks';
import Heading from './Heading';

function PreviewPage() {
  const { id } = useParams();

  const [error, setError] = useState();
  const [fitbs, setFitbs] = useState();
  const [waiting, setWaiting] = useState(true);

  useEffect(() => {
    selectFitbs({ filterByFormula: `${ID}="${id}"` }, (error, fitbs) => {
      if (error) {
        setError(error);
      } else {
        setFitbs(fitbs);
      }
    });
  }, [id]);

  useEffect(() => {
    if (error) {
      setWaiting(false);
    }
    if (fitbs) {
      setWaiting(false);
    }
  }, [error, fitbs]);

  return (
    <>
      <Heading title="TeamPrompts" />
      <ul>
        {!error &&
          !waiting &&
          fitbs.map(fitb => (
            <li key={fitb.id}>
              <FillInTheBlanks fitb={fitb} />
            </li>
          ))}
        {!error && !waiting && fitbs.length === 0 && (
          <li>
            <pre>404</pre>
          </li>
        )}
      </ul>
      {error && <pre>{JSON.stringify(error, 0, 2)}</pre>}
    </>
  );
}

export default PreviewPage;
