import React, { useEffect, useState } from 'react';
import {
  Link,
  HashRouter as Router,
  Route,
  Switch,
  useParams
} from 'react-router-dom';
import { version } from '../../../package.json';
import selectFitbs from '../../api/selectFitbs';
import selectTags from '../../api/selectTags';
import Filters from '../../components/Filters/Filters';
import Footer from '../../components/Footer/Footer';
import FillInTheBlanks from '../../FillInTheBlanks/FillInTheBlanks';
import { BLANK_XS } from '../../constants';

const UNKNOWN = 'Unknown';

function fitbsByTag({ fitbs, tag, tags }) {
  return fitbs.filter(fitb => fitb.tags.includes(tag.id));
}

function tagBySlug({ slug, tags }) {
  const empty = { name: '', slug: '' };
  if (tags.length > 0) {
    const tag = tags.find(tag => tag.slug === slug);
    return tag || { ...empty, name: UNKNOWN };
  }
  return empty;
}

function Heading() {
  return (
    <h1 className="font-bold mb-8 mt-2 text-4xl text-gray-900">TeamPrompts</h1>
  );
}

function DetailsPage({ fitbs, tags }) {
  const { id, slug } = useParams();
  const tag = tagBySlug({ slug, tags });
  const fitb = fitbs.find(fitb => fitb.id === id);
  return (
    <>
      <div className="mt-2">
        <Link className="text-indigo-700 underline" to="/">
          Home
        </Link>
        {' > '}
        <Link
          className="capitalize text-indigo-700 underline"
          to={`/${tag.slug}`}
        >
          {tag.name}
        </Link>
        {' > '}
        {BLANK_XS}
      </div>
      <Heading />
      <Filters
        allOff={true}
        filter={{ name: tag.name }}
        fitbs={fitbs}
        onClick={console.log}
        tags={tags}
      />
      {fitb && <FillInTheBlanks fitb={fitb} tag={tag} />}
    </>
  );
}

function Loading() {
  return (
    <>
      <div className="mt-2">&nbsp;</div>
      <h1 className="font-bold mb-8 mt-2 text-4xl text-gray-900">
        Loading ...
      </h1>
    </>
  );
}

function Home({ fitbs, tags }) {
  return (
    <>
      <div className="mt-2">Home</div>
      <Heading />
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

function TagPage({ fitbs, tags }) {
  const { slug } = useParams();
  const tag = tagBySlug({ slug, tags });
  return (
    <>
      <div className="mt-2">
        <Link className="text-indigo-700 underline" to="/">
          Home
        </Link>
        {' > '}
        <span className="capitalize">{tag.name}</span>
      </div>
      <Heading />
      <Filters
        allOff={true}
        filter={{ name: tag.name }}
        fitbs={fitbs}
        onClick={console.log}
        tags={tags}
      />
      <ul>
        {fitbsByTag({ fitbs, tag, tags }).map(fitb => (
          <li key={fitb.id}>
            <FillInTheBlanks fitb={fitb} tag={tag} />
          </li>
        ))}
      </ul>
    </>
  );
}

// TODO: change to _Provider
function Wrapper({ callback, children, loading }) {
  const [error, setError] = useState();
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

  useEffect(() => {
    if (!waiting) {
      callback({ fitbs, tags });
    }
  }, [callback, fitbs, tags, waiting]);

  return waiting ? loading : children;
}

function App() {
  const [fitbs, setFitbs] = useState([]);
  const [tags, setTags] = useState([]);

  return (
    <div className="flex flex-col font-serif items-center max-w-4xl mx-16 sm:mx-32 md:mx-32 lg:mx-32 xl:mx-auto">
      <Wrapper
        callback={({ fitbs, tags }) => {
          setFitbs(fitbs);
          setTags(tags);
        }}
        loading={<Loading />}
      >
        <Router>
          <Switch>
            <Route
              children={<DetailsPage fitbs={fitbs} tags={tags} />}
              exact={true}
              path="/:slug/:id"
            />
            <Route
              children={<TagPage fitbs={fitbs} tags={tags} />}
              exact={true}
              path="/:slug"
            />
            <Route
              children={<Home fitbs={fitbs} tags={tags} />}
              default={true}
              path="/"
            />
          </Switch>
        </Router>
      </Wrapper>
      <Footer version={version} />
    </div>
  );
}

export default App;
