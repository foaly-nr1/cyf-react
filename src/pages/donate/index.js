import React from 'react';
import * as axios from 'axios';
import styled from 'react-emotion';
import DonationPicker from '../../components/donation-picker';

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

const Image = styled('div')`
  background: url(../img/mentors/mentors-group.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  height: 40em;
  background-size: cover;
  @media (max-width: 1023px) {
    background-size: contain;
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
    const donateText = (
      <div>
        <h3>
          We are a non-profit organisation supporting refugees with the dream of
          becoming developers.
        </h3>
        <p>
          We rely solely on donations, in both time and money to keep this dream
          alive!
        </p>
        <p>
          All donations will help cover transportation, childcare, meals,
          laptops and mobile internet to our students most in need.
        </p>
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
        <Image />
      </div>
    );
  }
}

export default Donate;
