import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { version } from '../../../package.json';
import selectFitbs from '../../api/selectFitbs';
import selectTags from '../../api/selectTags';
import Footer from '../../components/Footer/Footer';
import Heading from './Heading';
import CategoryPage from './CategoryPage';
import HomePage from './HomePage';
import PreviewPage from './PreviewPage';
import PromptsPage from './PromptsPage';

// TODO: change to _Provider
function Wrapper({ callback, children, loading }) {
  const [error, setError] = useState();
  const [fitbs, setFitbs] = useState([]);
  const [tags, setTags] = useState([]);
  const [waiting, setWaiting] = useState(true);

  useEffect(() => {
    selectFitbs(null, (error, fitbs) => {
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

  useEffect(() => {
    if (!waiting) {
      callback(error, { fitbs, tags });
    }
  }, [callback, error, fitbs, tags, waiting]);

  return waiting ? loading : children;
}

function App() {
  const [error, setError] = useState();
  const [fitbs, setFitbs] = useState([]);
  const [tags, setTags] = useState([]);

  return (
    <div className="flex flex-col font-serif items-center max-w-4xl mx-16 sm:mx-32 md:mx-32 lg:mx-32 xl:mx-auto">
      <Wrapper
        callback={(error, { fitbs, tags }) => {
          if (error) {
            setError(error);
          } else {
            setFitbs(fitbs);
            setTags(tags);
          }
        }}
        loading={<Heading title="Loading ..." />}
      >
        <Router>
          <Switch>
            <Route
              children={(props) => (
                <PromptsPage {...props} fitbs={fitbs} tags={tags} />
              )}
              exact={true}
              path="/all/:id"
            />
            <Route
              children={<PreviewPage />}
              exact={true}
              path="/preview/:id"
            />
            <Route
              children={(props) => (
                <PromptsPage {...props} fitbs={fitbs} tags={tags} />
              )}
              exact={true}
              path="/:slug/:id"
            />
            <Route
              children={(props) => (
                <HomePage {...props} fitbs={fitbs} tags={tags} />
              )}
              exact={true}
              path="/all"
            />
            <Route
              children={(props) => (
                <CategoryPage {...props} fitbs={fitbs} tags={tags} />
              )}
              exact={true}
              path="/:slug"
            />
            <Route
              children={(props) => (
                <HomePage {...props} fitbs={fitbs} tags={tags} />
              )}
              default={true}
              path="/"
            />
          </Switch>
        </Router>
      </Wrapper>
      {error && <pre>{JSON.stringify(error, 0, 2)}</pre>}
      <Footer version={version} />
    </div>
  );
}

export default App;
