import React from 'react';
import PropTypes from 'prop-types';
import { TextAreaInput, FormFrame } from 'components/forms';

const SecondForm = props => (
  <FormFrame
    title="Motivation"
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
  validationErrorMessage: PropTypes.string.isRequired,
};

export default SecondForm;
