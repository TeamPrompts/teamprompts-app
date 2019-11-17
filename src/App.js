import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { name, version } from '../package.json';
import FillInTheBlanks from './FillInTheBlanks/FillInTheBlanks';
import makeModels from './makeModels';

function App() {
  const [models, setModels] = useState([]);
  const [waiting, setWaiting] = useState(true);

  useEffect(() => {
    makeModels((error, models) => {
      if (error) {
        console.log('makeModels error:', error);
        setWaiting(false);
      } else {
        setModels(models);
        setWaiting(false);
      }
    });
  }, []);

  return (
    <div className="flex flex-col font-serif items-center mx-auto my-12 w-3/4">
      <h1 className="capitalize font-normal hover:font-bold text-4xl text-gray-900">
        {name}
      </h1>
      {waiting ? (
        <FontAwesomeIcon
          className="text-4xl"
          icon={faCircleNotch}
          spin={true}
        />
      ) : (
        <ul>
          {models.map((model, index) => (
            <li key={index}>
              <FillInTheBlanks id={index} model={model} />
            </li>
          ))}
        </ul>
      )}
      <small className="font-normal hover:font-bold text-gray-700 text-sm">
        v{version}
      </small>
    </div>
  );
}

export default App;
