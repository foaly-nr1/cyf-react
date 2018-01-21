import axios from 'axios';
import type { AxiosPromise } from 'axios';
import type { CYFEvent } from '../../types';

// export type FetchEvents = string => Promise<CYFEvent>;

export default async (fetchFn: AxiosPromise = axios): Promise<CYFEvent> => {
  if (!process.env.REACT_APP_EVENTS_URL) {
    throw new Error(
      'Please specify a valid environmental variable for EVENTS_URL',
    );
  }
  const res = await fetchFn(`${process.env.REACT_APP_EVENTS_URL}`);
  return res.json();
};
