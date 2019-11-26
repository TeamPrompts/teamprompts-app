import React from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
  useParams
} from 'react-router-dom';
import Filters from './Filters';

function FiltersWithRouter({ filter, fitbs, onClick, tags }) {
  function Child() {
    const { id } = useParams();
    const tag = tags.find(tag => tag.slug === id);
    if (tag && filter !== tag) {
      onClick(tag);
    }
    return (
      <Filters filter={filter} fitbs={fitbs} onClick={onClick} tags={tags} />
    );
  }

  return (
    <Router>
      <Switch>
        <Route path="/:id" children={<Child />} />
        <Route path="/" children={<Child />} />
      </Switch>
    </Router>
  );
}

export default FiltersWithRouter;
