jest.mock('../src/instrumentation/AmplitudeHookProvider', () => ({
  useAmplitude: () => ({ logEvent: jest.fn() })
}));
