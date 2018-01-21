import fetchEvents from './';

describe('Fetching Events', () => {
  beforeAll(() => {
    process.env.REACT_APP_EVENTS_URL = 'events-api.io';
    process.env.REACT_APP_EVENTS_TOKEN = 'aaaa';
  });

  afterAll(() => {
    delete process.env.REACT_APP_EVENTS_URL;
    delete process.env.REACT_APP_EVENTS_TOKEN;
  });
  describe('#fetchEvents', () => {
    it('fetches a list of events', async () => {
      const fetchSpy = jest.fn(() =>
        Promise.resolve({ json: () => Promise.resolve('events') }),
      );

      expect(await fetchEvents(fetchSpy)).toEqual('events');
    });
  });
});
