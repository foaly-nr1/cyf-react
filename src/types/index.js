export type Auth = {
  userProfile: Function,
  getProfile: Function,
};

type CYFCity = 'London' | 'Manchester' | 'Glasgow';

type Mentor = {
  name: string,
  avatar: string,
};

export type Event = {
  city: CYFCity,
  description: string,
  intake: string,
  links: Array<Object>,
  location: string,
  mentors: Array<Mentor>,
  moduleLeaders: Array<Mentor>,
  startDate: string,
  topic: string,
};
