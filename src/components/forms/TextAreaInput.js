import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import {
  ControlLabel,
  FormControl,
  FormGroup,
} from 'react-bootstrap';

const StyledFormGroup = styled(FormGroup)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin: 20px 0 20px 0;
  justify-content: flex-start;
`;

const StyledFormControl = styled(FormControl)`
`;

const StyledControlLabel = styled(ControlLabel)`
  margin-bottom: 20px;
  text-align: left;
`;

const TextAreaInput = props => (
  <StyledFormGroup>
    {props.label && <StyledControlLabel>{props.label}</StyledControlLabel>}
    <StyledFormControl
      componentClass="textarea"
      rows="20"
      onChange={props.onChange}
      placeholder={props.placeholder}
      value={props.value}
      style={{
        color: 'black',
        fontSize: '1.75rem',
      }}
    />
  </StyledFormGroup>
);

TextAreaInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

TextAreaInput.defaultProps = {
  label: '',
  placeholder: '',
};

export default TextAreaInput;
