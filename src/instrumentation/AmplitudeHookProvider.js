import { Amplitude, AmplitudeProvider } from '@amplitude/react-amplitude';
import amplitude from 'amplitude-js';
import React, { createContext, useContext } from 'react';

export const AmplitudeContext = createContext();

export function useAmplitude() {
  return useContext(AmplitudeContext);
}

function AmplitudeHookProvider({ apiKey, children }) {
  return (
    <AmplitudeProvider
      amplitudeInstance={amplitude.getInstance()}
      apiKey={apiKey}
    >
      <Amplitude>
        {props => {
          return (
            <AmplitudeContext.Provider value={props}>
              {children}
            </AmplitudeContext.Provider>
          );
        }}
      </Amplitude>
    </AmplitudeProvider>
  );
}

export default AmplitudeHookProvider;
