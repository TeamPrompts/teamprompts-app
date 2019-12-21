import { useAmplitude } from '../src/instrumentation/AmplitudeHookProvider';

jest.mock('../src/instrumentation/AmplitudeHookProvider');

useAmplitude.mockImplementation(() => ({ logEvent: jest.fn() }));
