import { Amplitude, AmplitudeProvider } from '@amplitude/react-amplitude';
import amplitude from 'amplitude-js';
import React, { createContext, useContext } from 'react';

const { REACT_APP_USE_AMPLITUDE } = process.env;

export const AmplitudeContext = createContext();

export function useAmplitude() {
  return useContext(AmplitudeContext);
}

const mockProps = { logEvent: console.log };

function AmplitudeHookProvider({ apiKey, children }) {
  return (
    <AmplitudeProvider
      amplitudeInstance={amplitude.getInstance()}
      apiKey={apiKey}
    >
      <Amplitude>
        {props => {
          return (
            <AmplitudeContext.Provider
              value={REACT_APP_USE_AMPLITUDE === 'true' ? props : mockProps}
            >
              {children}
            </AmplitudeContext.Provider>
          );
        }}
      </Amplitude>
    </AmplitudeProvider>
  );
}

export default AmplitudeHookProvider;
