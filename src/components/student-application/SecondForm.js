import React from 'react';
import PropTypes from 'prop-types';
import { TextAreaInput, FormFrame } from 'components/forms';

const subTitle = (
  <span>
    Many thanks for submitting your application! <br /> <br /> Write to{' '}
    <b>applicants@codeyourfuture.io</b> to notify us of your submission. We will
    send you instructions for the next steps. If you provide us with your
    motivation below, you will already have completed the first step of the
    application!
  </span>
);

const SecondForm = props => (
  <FormFrame
    title="Student Application"
    subTitle={subTitle}
    topErrorMessage={props.validationErrorMessage}
    submitMessage={props.submitMessage}
    onSubmit={props.onSubmit}
  >
    <TextAreaInput
      label="Why do you want to join CYF and learn programming? (Please write at least 100 words) *"
      onChange={props.onChange('motivation')}
      onBlur={props.onBlur('motivation')}
      value={props.motivation}
      placeholder="Tell us a bit more..."
      wordCount
      errors={props.validationErrors.motivation}
    />
  </FormFrame>
);

SecondForm.propTypes = {
  motivation: PropTypes.string.isRequired,
  submitMessage: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  validationErrors: PropTypes.object.isRequired,
  validationErrorMessage: PropTypes.object.isRequired,
};

export default SecondForm;
