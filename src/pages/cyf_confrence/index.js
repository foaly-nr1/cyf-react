import React from 'react';
import CyfConfBg from '../../assets/images/CYF_conf_BG.jpg';
import CyfWhiteLogo from '../../assets/images/logos/CYF_white_logo.png';
import coop from '../../assets/images/logos/COOP_white_logo.png';
import citiec from '../../assets/images/logos/cititec_white_logo.png';

const styles = {
  firstTitle: {
    marginTop: window.innerWidth < 500 ? 40 : 70,
    color: 'white',
    fontSize: window.innerWidth < 500 ? '1.5em' : '3em',
    fontWeight: 'bold',
  },
  cyfLogo: {
    width: window.innerWidth < 500 ? '80%' : '37%',
  },
  welcom: {
    width: 334,
    paddingRight: 80,
    paddingTop: 50,
    color: 'white',
    fontSize: window.innerWidth < 500 ? '1.5em' : '2.2em',
    fontWeight: 'bold',
  },
  summit: {
    fontSize: window.innerWidth < 500 ? '4.3em' : '6em',
    alignContent: 'center',
    color: 'white',
    fontWeight: 'bold',
    paddingLeft: window.innerWidth < 500 ? '95px' : 250,
    marginTop: window.innerWidth < 500 ? '-10px' : '-20px',
  },
  cyfConf: {
    width: '100vw',
    height: window.innerWidth < 500 ? '600px' : '815px',
    backgroundImage: `url(${CyfConfBg})`,
  },
  date: {
    fontSize: window.innerWidth < 500 ? '1.3em' : '3em',
    letterSpacing: 4,
    fontWeight: 'bold',
    TextAligen: 'center',
    alignContent: 'center',
    color: 'white',
    lineHeight: 1,
  },
  logo: {
    marginTop: window.innerWidth < 500 ? '-20px' : 0,
    padding: 50,
  },
  register: {
    color: 'white',
    fontSize: window.innerWidth < 500 ? '1.5em' : '2em',
  },
  btn: {
    marginTop: 40,
    backgroundColor: '#d12f30',
  },
};

const Conference = () => (
  <main>
    <div className="container-fluid img-fluid" style={styles.cyfConf}>
      <p style={styles.firstTitle} className="text-center col">
        The first event to support refugees joining the tech industry
      </p>
      <p
        style={styles.welcom}
        className="text-center col-lg-offset-4 col-sm-offset-4"
      >
        Welcome to the
      </p>
      <img
        className="img-fluid"
        style={styles.cyfLogo}
        src={CyfWhiteLogo}
        alt="code you future logo"
      />
      <p style={styles.summit} className="text-center col">
        summit
      </p>
      <p style={styles.date}>
        30th of June - 1st of July<br />Manchester
      </p>
      <p className="btn" style={styles.btn}>
        <a
          href="https://www.eventbrite.co.uk/e/the-inaugural-code-your-future-summit-tickets-46873336411"
          style={styles.register}
        >
          register here
        </a>
      </p>
      <div style={styles.logo} className="col">
        <img
          src={coop}
          width={window.innerWidth < 500 ? 20 : 40}
          height={window.innerWidth < 500 ? 20 : 40}
          alt="CoOp logo"
        />
        <img
          src={citiec}
          width={window.innerWidth < 500 ? 50 : 100}
          height={window.innerWidth < 500 ? 15 : 30}
          alt="cititec logo"
          style={{ paddingLeft: '10px' }}
        />
      </div>
    </div>
  </main>
);

export default Conference;
