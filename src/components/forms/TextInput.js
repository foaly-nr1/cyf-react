import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import {
  ControlLabel,
  FormControl,
  FormGroup,
} from 'react-bootstrap';
import ValidationErrors from './ValidationErrors';

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
      type={props.type}
      onChange={event => props.onChange(event.target.value)}
      placeholder={props.placeholder}
      value={props.value}
      style={{
        color: 'black',
        fontSize: '1.75rem',
        fontWeight: 500,
      }}
      onBlur={event => props.onBlur(event.target.value)}
    />
    <ValidationErrors errors={props.errors} />
  </StyledFormGroup>
);

TextInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  errors: PropTypes.arrayOf(PropTypes.string),
};

TextInput.defaultProps = {
  type: 'text',
  label: '',
  placeholder: '',
  errors: [],
  onBlur: () => {},
};

export default TextInput;
