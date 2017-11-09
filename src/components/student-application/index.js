import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import {
  TextAreaInput,
  RadioInput,
  TextInput,
} from 'components';
import { Button } from 'react-bootstrap';


const FormOuterContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 768px;
  margin: 50px;
  font-size: 1.7rem;
  @media (max-width: 500px) {
    margin: 20px;
  }
`;

const FormInnerContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-width: 20px 35px 20px 35px;
  border-color: #f3f5f6;
  border-style: solid;
  padding: 30px;
  font-size: 1.8rem;
  @media (max-width: 500px) {
    border-width: 0;
    padding: 10px;
  }
`;

const Form = styled('form')`
  margin-top: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;


const ErrorSpan = styled('span')`
  color: red;
  font-size: 2rem;
  margin: 20px 0 20px 0;
`;

const StudentApplicationForm = props => (
  <FormOuterContainer>
    <h3>Student Application</h3>
    <FormInnerContainer>
      <span>
        Please fill out the form below so we can proceed with your application.
      </span>
      {/* <FormInnerContainer /> */}
      <Form>
        <TextInput
          label="What is your name? (First and Last Name) *"
          onChange={props.onChange('name')}
          value={props.name}
          placeholder="Your full name..."
        />
        <TextInput
          label="What&#39;s your email? *"
          onChange={props.onChange('email')}
          value={props.email}
          placeholder="example@example.com"
        />
        <TextInput
          label="Where are you from? *"
          onChange={props.onChange('country')}
          value={props.country}
          placeholder="Your country of country..."
        />
        <TextInput
          label="In what city do you live? *"
          onChange={props.onChange('city')}
          value={props.city}
          placeholder="e.g. London"
        />
        <RadioInput
          label="Are you an asylum seeker/refugee? *"
          onChange={props.onChange('refugee')}
          choices={[
            { label: 'Yes', value: 'Yes' },
            { label: 'No', value: 'No' },
          ]}
          checked={props.refugee}
        />
        <RadioInput
          label="Have you done some programming before? *"
          onChange={props.onChange('programming')}
          choices={[
            { label: 'None', value: 'None' },
            { label: 'Very little', value: 'Very little' },
            { label: 'Some', value: 'Some' },
            { label: 'Experienced', value: 'Experienced' },
          ]}
          checked={props.programming}
        />
        <TextInput
          label="What is your mobile number? *"
          onChange={props.onChange('phone')}
          value={props.phone}
          placeholder="e.g. 07489398381"
        />
        <TextAreaInput
          label="Why do you want to join CYF and learn programming? (Please write at least 300 words) *"
          onChange={props.onChange('motivation')}
          value={props.motivation}
          placeholder="Tell us a bit more..."
        />
      </Form>
      {props.errorMessage && <ErrorSpan>{props.errorMessage}</ErrorSpan>}
      <Button onClick={props.onSubmit}>Submit</Button>
    </FormInnerContainer>
  </FormOuterContainer>
);

StudentApplicationForm.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  refugee: PropTypes.string.isRequired,
  programming: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  motivation: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default StudentApplicationForm;
