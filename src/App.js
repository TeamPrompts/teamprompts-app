import React from 'react';
import { name, version } from '../package.json';
import FillInTheBlanks from './FillInTheBlanks/FillInTheBlanks';
import models from './models.json';

function App() {
  return (
    <div className="flex flex-col font-serif items-center mx-auto my-12 w-3/4">
      <h1 className="capitalize font-normal hover:font-bold text-4xl text-gray-900">
        {name}
      </h1>
      <ul>
        {models.map((model, index) => (
          <li key={index}>
            <FillInTheBlanks id={index} model={model} />
          </li>
        ))}
      </ul>
      <small className="font-normal hover:font-bold text-gray-700 text-sm">
        v{version}
      </small>
    </div>
  );
}

export default App;
