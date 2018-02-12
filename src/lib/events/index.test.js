import { sortEventsByDate } from './';

describe('Fetching Events', () => {
  beforeAll(() => {
    process.env.REACT_APP_EVENTS_URL = 'events-api.io';
    process.env.REACT_APP_EVENTS_TOKEN = 'aaaa';
  });

  afterAll(() => {
    delete process.env.REACT_APP_EVENTS_URL;
    delete process.env.REACT_APP_EVENTS_TOKEN;
  });

  // describe('#fetchEvents', () => {
  //   it('fetches a list of events', async () => {
  //     const fetchSpy = jest.fn(() =>
  //       Promise.resolve({ json: () => Promise.resolve('events') }),
  //     );
  //     expect(await fetchEvents(fetchSpy)).toEqual('events');
  //   });
  // });

  describe('processing the events', () => {
    it('it gets the date from a first event object and creates a key', () => {
      const event = { date: '2018-01-20' };
      const result = [{ date: '2018-01-20', events: [event] }];
      expect(sortEventsByDate([event])).toEqual(result);
    });

    it('adds multiple events to the same array key', () => {
      const firstEvent = { date: '2018-01-20' };
      const secondEvent = { date: '2018-01-20' };
      const result = [
        { date: '2018-01-20', events: [firstEvent, secondEvent] },
      ];
      expect(sortEventsByDate([firstEvent, secondEvent])).toEqual(result);
    });

    it('it adds a second key to the object for a second event with a new date', () => {
      const firstEvent = { date: '2018-01-20' };
      const secondEvent = { date: '2018-02-22' };
      const result = [
        { date: '2018-01-20', events: [firstEvent] },
        { date: '2018-02-22', events: [secondEvent] },
      ];
      expect(sortEventsByDate([firstEvent, secondEvent])).toEqual(result);
    });

    it('sorts the array by date', () => {
      const firstEvent = { date: '2018-01-20' };
      const secondEvent = { date: '2018-02-22' };
      const thirdEvent = { date: '2018-02-28' };
      const result = [
        { date: '2018-01-20', events: [firstEvent] },
        { date: '2018-02-22', events: [secondEvent] },
        { date: '2018-02-28', events: [thirdEvent] },
      ];
      expect(sortEventsByDate([thirdEvent, firstEvent, secondEvent])).toEqual(
        result,
      );
    });
  });
});
