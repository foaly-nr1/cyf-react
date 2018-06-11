import React from 'react';
// import TopSection from '../../components/top-section';
import CyfConfBg from '../../assets/images/CYF_conf_BG.jpg'
import CyfWhiteLogo from '../../assets/images/logos/CYF_white_logo.png'
import coop from '../../assets/images/logos/COOP_white_logo.png'
import citiec from '../../assets/images/logos/cititec_white_logo.png'

const styles = {
  firstTitle: {
    position: 'absolute',
    top: "10%",
    left: window.innerWidth < 500 ? "15%" : "20%",
    color: 'white',
    fontSize: window.innerWidth < 500 ? "1em" : "3em",
    fontWeight: 'bold'
  },
  cyfLogo: {
    marginTop: window.innerWidth < 500 ? "-78%" : "-80%",
    width: window.innerWidth < 500 ? "55%" : "37%",
    zIndex: 10
  },
  welcom: {
    position: 'absolute',
    top: window.innerWidth < 500 ? "17%" : "37%",
    left: window.innerWidth < 500 ? "28%" : "35%",
    alignContent: 'center',
    color: 'white',
    fontSize: window.innerWidth < 500 ? "1em" : "2.2em",
    fontWeight: 'bold',
  },
  summit: {
    position: 'absolute',
    top: window.innerWidth < 500 ? "25%" : "63%",
    left: window.innerWidth < 500 ? "45%" : "48%",
    fontSize: window.innerWidth < 500 ? "2.6em" : '6em',
    alignContent: 'center',
    color: 'white',
    textTransform: 'lowercase'
  },
  cyfConf: {
    width: "100vw"
  },
  date: {
    position: 'absolute',
    top: window.innerWidth < 500 ? "33%" : "80%",
    left: "28%",
    fontSize: window.innerWidth < 500 ? "1.2em" : '4em',
    fontWeight: "bold",
    TextAligen: 'center',
    alignContent: 'center',
    color: 'white',
    lineHeight: 1
  },
  logo: {
    display: 'flex',
    position: 'absolute',
    top: window.innerWidth < 500 ? "30%" : "110%",
    left: window.innerWidth < 500 ? "28%" : "40%",
    margin: 20,
    padding: 50,

  },
}


const Confrence = () => (
  <main  >
    <div className="container-fluid" style={styles.cyfConf}>
      <img src={CyfConfBg} alt='code your future confrence' />
      <p style={styles.firstTitle} className='text-center col'>The first event to support refugees joining the<br /> tech industry</p>
      <p style={styles.welcom}>Welcome to the</p>
      <img style={styles.cyfLogo} src={CyfWhiteLogo} alt='code you future logo' />
      <h3 style={styles.summit}>summit</h3>
      <p style={styles.date}>30th of June - 1st of July<br />Manchester</p>
      <div style={styles.logo} className='col-centered'>
        <img src={coop} width={window.innerWidth < 500 ? 20 : 40} height={window.innerWidth < 500 ? 20 : 40} alt='CoOp logo' />
        <img src={citiec} width={window.innerWidth < 500 ? 40 : 100} height={window.innerWidth < 500 ? 12 : 30} alt='cititec logo' style={{ paddingLeft: "10px" }} />


      </div>






    </div>

  </main>
);

export default Confrence