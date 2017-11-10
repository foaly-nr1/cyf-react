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
`;

const StyledControlLabel = styled(ControlLabel)`
  margin-bottom: 20px;
`;

const TextInput = props => (
  <StyledFormGroup>
    {props.label && <StyledControlLabel>{props.label}</StyledControlLabel>}
    <FormControl
      componentClass="input"
      onChange={props.onChange}
      placeholder={props.placeholder}
      value={props.value}
    />
  </StyledFormGroup>
);

TextInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

TextInput.defaultProps = {
  label: '',
  placeholder: '',
};

export default TextInput;
