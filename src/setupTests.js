import { useAmplitude } from '../src/instrumentation/AmplitudeHookProvider';

jest.mock('../src/instrumentation/AmplitudeHookProvider');

const mockLogEvent = jest.fn();

useAmplitude.mockImplementation(() => ({ logEvent: mockLogEvent }));

beforeEach(() => {
  mockLogEvent.mockReset();
});
