import React from 'react';
import * as axios from 'axios';
import styled from 'react-emotion';
import DonationPicker from '../../components/donation-picker';
import donate from '../../assets/images/donate.jpg';

const Container = styled('div')`
  display: flex;
  padding: 48px 24px 0 24px;
  margin-bottom: 48px;
  width: 100%;
  @media (max-width: 1023px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const PickerContainer = styled('div')`
  display: flex;
  width: 50%;
  justify-content: flex-end;
  margin: 0 0 0 0;
  @media (max-width: 1023px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;

const TextContainer = styled('div')`
  display: flex;
  width: 50%;
  justify-content: flex-start;
  margin: 0 100px 0 100px;
  color: black;
  text-align: left;
  @media (max-width: 1023px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 24px 0 0 0;
  }
`;

const ImageContainer = styled('div')`
  overflow: hidden;
  max-height: 450px;
  margin: 0 auto;
  & img {
    width: 100%;
    max-width: 1800px;
  }
`;

class Donate extends React.Component {
  state = {
    tokenSuccess: null,
    tokenError: null,
  };

  onTokenSuccess = async (token, amount) => {
    try {
      await axios.post(
        process.env.REACT_APP_DONATION_ENDPOINT,
        {
          token,
          amount,
        },
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
        },
      );
      this.setState({ tokenSuccess: true });
    } catch (e) {
      this.setState({ tokenError: true });
    }
  };

  render() {
    const { tokenSuccess, tokenError } = this.state;
    const style = {
      listStyleType: 'none',
      fontSize: '18px',
      lineHeight: '32px',
      padding: '0',
      fontFamily: 'Roboto',
      fontWeight: '100',
      color: '#555',
    };
    const donateText = (
      <div>
        <h3>100% donation model</h3>
        <br />
        <p style={style}>
          All the support from individuals goes towards covering our student
          expenses including childcare, meals, transportation and mobile
          internet.
        </p>
        <ul style={style}>
          <li>
            <strong>£300</strong> Covers the childcare of a student for 3 months
          </li>
          <li>
            <strong>£600</strong> Covers the meals of the class for 3 months
            <li>
              <strong>£1,000</strong> Covers of training a student for 3-months
            </li>
          </li>
          <li>
            <strong>£2,000</strong> Average cost of training a student at CYF
            (student expenses included){' '}
          </li>
          <li>
            <strong>£5,000</strong> Become a Class Sponsor and cover expenses
            for 5 students (edited)
          </li>
        </ul>
      </div>
    );
    return (
      <div>
        {tokenError && (
          <h4>
            Sorry, there was a problem processing your donation. Please try
            again!
          </h4>
        )}
        <Container>
          {tokenSuccess && <h2>Thank you for your donation!</h2>}
          <PickerContainer>
            {!tokenSuccess && (
              <DonationPicker onTokenCapture={this.onTokenSuccess} />
            )}
          </PickerContainer>
          {!tokenSuccess && <TextContainer>{donateText}</TextContainer>}
        </Container>
        <ImageContainer>
          <img
            src={donate}
            alt="code-your-future-students"
            style={{ maxWidth: 650 }}
          />
        </ImageContainer>
      </div>
    );
  }
}

export default Donate;
