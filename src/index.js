import { Amplitude, AmplitudeProvider } from '@amplitude/react-amplitude';
import amplitude from 'amplitude-js';
import React from 'react';
import ReactDOM from 'react-dom';
import useCookie from '@devhammed/use-cookie';
import { name, version } from '../package.json';
import AppV2 from './containers/App/App';
import App from './App';
import initializeReactGA from './initializeReactGA';
import * as serviceWorker from './serviceWorker';
import './styles.css';

const { NODE_ENV, REACT_APP_AMPLITUDE_KEY } = process.env;

function Wrapper() {
  const [experiment] = useCookie('teamprompts-app-experiment', 'UNKNOWN');
  return experiment === 'MASTER_DETAIL_V1' ? <AppV2 /> : <App />;
}

ReactDOM.render(
  <AmplitudeProvider
    amplitudeInstance={amplitude.getInstance()}
    apiKey={REACT_APP_AMPLITUDE_KEY}
  >
    <Amplitude>
      {({ logEvent }) => {
        initializeReactGA();
        // INFO: https://github.com/amplitude/react-amplitude#amplitude-props
        logEvent(`hello ${name} v${version} ${NODE_ENV}`); // TODO: move to constants
        return <Wrapper />;
      }}
    </Amplitude>
  </AmplitudeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
