import React from 'react';
import ReactDOM from 'react-dom';
import useCookie from '@devhammed/use-cookie';
import App from './containers/App/App';
import AmplitudeHookProvider from './instrumentation/AmplitudeHookProvider';
import { NONE, TEAMPROMPTS_APP_EXPERIMENT, UNKNOWN } from './constants';
import initializeReactGA from './initializeReactGA';
import * as serviceWorker from './serviceWorker';
import './styles.css';

const { REACT_APP_AMPLITUDE_KEY } = process.env;

function Wrapper() {
  initializeReactGA();
  const [experiment] = useCookie(TEAMPROMPTS_APP_EXPERIMENT, NONE);
  return experiment === UNKNOWN ? <div>UNKNOWN</div> : <App />;
}

ReactDOM.render(
  <AmplitudeHookProvider apiKey={REACT_APP_AMPLITUDE_KEY}>
    <Wrapper />
  </AmplitudeHookProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
