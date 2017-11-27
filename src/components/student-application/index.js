import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import { TextAreaInput, RadioInput, TextInput } from 'components';
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

const SubmitErrorSpan = styled('span')`
  color: red;
  font-size: 1.7rem;
  margin: 20px 0 20px 0;
`;

const StudentApplicationForm = props => (
  <FormOuterContainer>
    <h3>Student Application</h3>
    <FormInnerContainer>
      <span className="title">
        Please fill out the form below so we can proceed with your application.
      </span>
      {Object.keys(props.validationErrors)
        .map(key => props.validationErrors[key].length)
        .some(length => length > 0) && (
        <SubmitErrorSpan>
          There are some errors in the form, please correct them before
          submitting :)
        </SubmitErrorSpan>
      )}
      <Form>
        <TextInput
          label="What is your name? (First and Last Name) *"
          onChange={props.onChange('name')}
          onBlur={props.onBlur('name')}
          value={props.name}
          placeholder="Your full name..."
          type="text"
          errors={props.validationErrors.name}
        />
        <TextInput
          label="What&#39;s your email? *"
          onChange={props.onChange('email')}
          onBlur={props.onBlur('email')}
          value={props.email}
          placeholder="example@example.com"
          type="email"
          errors={props.validationErrors.email}
        />
        <TextInput
          label="Where are you from? *"
          onChange={props.onChange('country')}
          onBlur={props.onBlur('country')}
          value={props.country}
          placeholder="e.g. Iran"
          errors={props.validationErrors.country}
        />
        <TextInput
          label="In what city do you live? *"
          onChange={props.onChange('city')}
          onBlur={props.onBlur('city')}
          value={props.city}
          placeholder="e.g. London"
          errors={props.validationErrors.city}
        />
        <RadioInput
          label="Are you an asylum seeker/refugee? *"
          onChange={props.onChange('refugee')}
          onBlur={props.onBlur('refugee')}
          choices={[
            { label: 'Yes', value: 'Yes' },
            { label: 'No', value: 'No' },
          ]}
          checked={props.refugee}
          errors={props.validationErrors.refugee}
        />
        <RadioInput
          label="Have you done some programming before? *"
          onChange={props.onChange('programming')}
          onBlur={props.onBlur('programming')}
          choices={[
            { label: 'None', value: 'None' },
            { label: 'Very little', value: 'Very little' },
            { label: 'Some', value: 'Some' },
            { label: 'Experienced', value: 'Experienced' },
          ]}
          checked={props.programming}
          errors={props.validationErrors.programming}
        />
        <TextInput
          label="What is your mobile number? *"
          onChange={props.onChange('phone')}
          onBlur={props.onBlur('phone')}
          value={props.phone}
          placeholder="e.g. 07489398381"
          type="tel"
          errors={props.validationErrors.phone}
        />
        <TextAreaInput
          label="Why do you want to join CYF and learn programming? (Please write at least 100 words) *"
          onChange={props.onChange('motivation')}
          onBlur={props.onBlur('motivation')}
          value={props.motivation}
          placeholder="Tell us a bit more..."
          wordCount
          errors={props.validationErrors.motivation}
        />
      </Form>
      {props.submitMessage && (
        <SubmitErrorSpan>{props.submitMessage}</SubmitErrorSpan>
      )}
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
  submitMessage: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  validationErrors: PropTypes.object.isRequired,
};

export default StudentApplicationForm;
