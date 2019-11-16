import React from 'react';
import { name, version } from '../package.json';

function App() {
  return (
    <div className="flex flex-col font-serif items-center mx-auto my-12 w-3/4">
      <h1 className="capitalize font-normal hover:font-bold text-4xl text-gray-900">
        {name}
      </h1>
      <small className="font-normal hover:font-bold text-gray-700 text-sm">
        v{version}
      </small>
    </div>
  );
}

export default App;
