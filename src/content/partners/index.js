import pipedrive from './logos/pipedrive.png';
import ticketmaster from './logos/ticketmaster.png';
import github from './logos/github.png';
import geckoboard from './logos/geckoboard.png';
import slack from './logos/slack.png';
import kinningParkComplex from './logos/kinningparkcomplex.png';
import coop from './logos/coop.png';

const partners = {
  general: [
    {
      id: 'github',
      name: 'GitHub',
      url: 'http://github.com/',
      logo: github,
      featured: false,
    },
  ],

  london: [
    {
      id: 'ticketmaster',
      name: 'Ticketmaster',
      url: 'http://www.ticketmaster.com/',
      logo: ticketmaster,
      featured: true,
    },
    {
      id: 'geckoboard',
      name: 'Geckoboard',
      url: 'http://www.geckoboard.com/',
      logo: geckoboard,
      featured: false,
    },
  ],

  scotland: [
    {
      id: 'kinningParkComplex',
      name: 'Kinning Park Complex',
      url: 'http://kinningparkcomplex.org',
      logo: kinningParkComplex,
      featured: false,
    },
  ],

  manchester: [
    {
      id: 'coop',
      name: 'Co-op',
      url: 'http://www.coop.co.uk',
      logo: coop,
      featured: false,
    },
  ],

  tech: [
    {
      id: 'pipedrive',
      name: 'Pipedrive',
      url: 'http://www.pipedrive.com',
      logo: pipedrive,
      featured: false,
    },
    {
      id: 'slack',
      name: 'Slack',
      url: 'http://slack.com/',
      logo: slack,
      featured: false,
    },
  ],
};

export default partners;
