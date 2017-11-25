import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const Container = styled('div')`
  margin: 50px 20px 20px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  text-align: left;
`;

const ApplySuccess = (props) => {
  let SuccessContent;
  switch (props.match.params.formType) {
    case 'student':
      SuccessContent = (
        <span>
          Many thanks for submitting your application! <br /> <br /> Write to <b>applicants@codeyourfuture.io</b> to notify us of your submission. We will send you instructions for the next steps.
        </span>
      );
      break;
    case 'mentor':
      SuccessContent = <span>Success! Write a success message and style for Mentors here.</span>;
      break;
    case 'volunteer':
      SuccessContent = <span>Success! Write a success message and style for Volunteers here.</span>;
      break;
    default:
      SuccessContent = <span>Your application was successful!</span>;
      break;
  }
  return <Container>{SuccessContent}</Container>;
};

ApplySuccess.propTypes = {
  match: PropTypes.object.isRequired,
};

export default ApplySuccess;
