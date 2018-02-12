// @flow

export type Auth = {
  userProfile: Function,
  getProfile: Function,
  isAuthenticated: Function,
  login: Function,
  logout: Function,
};

type CYFCity = 'London' | 'Manchester' | 'Glasgow';

type Mentor = {
  name: string,
  avatar: string,
};

export type CYFEvent = {
  city: CYFCity,
  date: string,
  description: string,
  endTime: string,
  eventId: string,
  intake: string,
  links: Array<Object>,
  location: string,
  mentors: Array<Mentor>,
  moduleLeaders: Array<Mentor>,
  startTime: string,
  topic: string,
};
