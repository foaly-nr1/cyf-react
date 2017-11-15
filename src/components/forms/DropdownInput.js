import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import {
  ControlLabel,
  DropdownButton,
  FormGroup,
  MenuItem,
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

const DropdownInput = props => (
  <StyledFormGroup>
    {props.label && <StyledControlLabel>{props.label}</StyledControlLabel>}
    <DropdownButton
      onSelect={props.onChange}
      title={props.value || 'Your country'}
      id="dropdown-basic-1"
    >
      {props.items.map(item => (
        <MenuItem key={item} eventKey={item}>
          {item}
        </MenuItem>
      ))}
    </DropdownButton>
    <ValidationErrors errors={props.errors} />
  </StyledFormGroup>
);

DropdownInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  errors: PropTypes.arrayOf(PropTypes.string),
};

DropdownInput.defaultProps = {
  label: '',
  errors: [],
};

export default DropdownInput;
