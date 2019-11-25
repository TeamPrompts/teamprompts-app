import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
  useParams
} from 'react-router-dom';
import { name, version } from '../package.json';
import selectFitbs from './api/selectFitbs';
import selectTags from './api/selectTags';
import Filters from './components/Filters/Filters';
import FillInTheBlanks from './FillInTheBlanks/FillInTheBlanks';

// INFO: move to api?
const ALL = 'all';
export const tagAll = { name: ALL, slug: ALL };

function App() {
  const [error, setError] = useState();
  const [filter, setFilter] = useState(tagAll);
  const [fitbs, setFitbs] = useState([]);
  const [tags, setTags] = useState([]);
  const [waiting, setWaiting] = useState(true);

  useEffect(() => {
    selectFitbs((error, fitbs) => {
      if (error) {
        setError(error);
      } else {
        setFitbs(fitbs);
      }
    });
  }, []);

  useEffect(() => {
    selectTags((error, tags) => {
      if (error) {
        setError(error);
      } else {
        setTags(tags);
      }
    });
  }, []);

  useEffect(() => {
    if (error) {
      setWaiting(false);
    }
    if (fitbs.length > 0 && tags.length > 0) {
      setWaiting(false);
    }
  }, [error, fitbs.length, tags.length]);

  function Wrapper() {
    const { id } = useParams();
    const tag = tags.find(tag => tag.slug === id);
    if (tag && filter !== tag) {
      setFilter(tag);
    }
    return (
      <Filters
        filter={filter}
        fitbs={fitbs}
        onClick={tag => setFilter(tag)}
        tags={tags}
      />
    );
  }

  return (
    <div className="flex flex-col font-serif items-center max-w-4xl mx-16 sm:mx-32 md:mx-32 lg:mx-32 xl:mx-auto">
      <h1 className="capitalize font-normal font-bold text-4xl text-gray-900">
        {name}
      </h1>
      {waiting ? (
        <FontAwesomeIcon
          className="text-4xl"
          icon={faCircleNotch}
          spin={true}
        />
      ) : error ? (
        <pre>{JSON.stringify(error, 0, 2)}</pre>
      ) : (
        <>
          <Router>
            <Switch>
              <Route path="/:id" children={<Wrapper />} />
              <Route path="/" children={<Wrapper />} />
            </Switch>
          </Router>
          <ul>
            {fitbs
              .filter(fitb => {
                if (filter.name === ALL) {
                  return fitb;
                }
                if (filter.fitbs.includes(fitb.id)) {
                  return fitb;
                }
                return null;
              })
              .map(fitb => {
                return (
                  <li key={fitb.id}>
                    <FillInTheBlanks fitb={fitb} />
                  </li>
                );
              })}
          </ul>
        </>
      )}
      <small className="font-normal text-gray-700 text-sm">v{version}</small>
    </div>
  );
}

export default App;
