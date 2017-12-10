import React from 'react';
import PropTypes from 'prop-types';
import { RadioInput, TextInput, FormFrame } from 'components/forms';

const FirstForm = props => (
  <FormFrame
    title="Student Application"
    subTitle="Please fill out the form below so we can proceed with your application."
    topErrorMessage={props.validationErrorMessage}
    submitMessage={props.submitMessage}
    onSubmit={props.onSubmit}
    submitLabel="Submit your information"
  >
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
      placeholder="For example: Iran"
      errors={props.validationErrors.country}
    />
    <TextInput
      label="In what city do you live? *"
      onChange={props.onChange('city')}
      onBlur={props.onBlur('city')}
      value={props.city}
      placeholder="For example: London"
      errors={props.validationErrors.city}
    />
    <RadioInput
      label="Are you an asylum seeker/refugee? *"
      onChange={props.onChange('refugee')}
      onBlur={props.onBlur('refugee')}
      choices={[{ label: 'Yes', value: 'Yes' }, { label: 'No', value: 'No' }]}
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
      placeholder="For example: 07489398381"
      type="tel"
      errors={props.validationErrors.phone}
    />
    <TextInput
      label="How did you hear about us? *"
      onChange={props.onChange('realReferrer')}
      onBlur={props.onBlur('realReferrer')}
      value={props.realReferrer}
      placeholder="For example: Refugee Council"
      type="text"
      errors={props.validationErrors.realReferrer}
    />
  </FormFrame>
);

FirstForm.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  realReferrer: PropTypes.string.isRequired,
  refugee: PropTypes.string.isRequired,
  programming: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  submitMessage: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  validationErrorMessage: PropTypes.string.isRequired,
  validationErrors: PropTypes.object.isRequired,
};

export default FirstForm;
