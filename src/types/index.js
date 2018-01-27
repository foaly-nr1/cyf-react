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
  description: string,
  endDate: string,
  eventId: string,
  intake: string,
  links: Array<Object>,
  location: string,
  mentors: Array<Mentor>,
  moduleLeaders: Array<Mentor>,
  startDate: string,
  topic: string,
};
