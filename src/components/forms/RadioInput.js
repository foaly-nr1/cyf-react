import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import {
  ControlLabel,
  ToggleButtonGroup,
  ToggleButton,
} from 'react-bootstrap';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)`
  margin: 20px 0 20px 0;
`;

const StyledToggleButton = styled(ToggleButton)`
`;

const StyledControlLabel = styled(ControlLabel)`
  margin-bottom: 20px;
`;

const RadioInput = props => (
  <StyledToggleButtonGroup
    type="radio"
    name="foo"
    vertical
  >
    {props.label && <StyledControlLabel>{props.label}</StyledControlLabel>}
    {
      props.choices.map(choice => (
        <StyledToggleButton
          onChange={props.onChange}
          checked={props.checked === choice.value}
          value={choice.value}
          key={choice.value}
          bsStyle={props.checked === choice.value ? 'success' : undefined}
        >
          {choice.label}
        </StyledToggleButton>
      ))
    }
  </StyledToggleButtonGroup>
);

RadioInput.propTypes = {
  label: PropTypes.string,
  choices: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  })).isRequired,
  checked: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

RadioInput.defaultProps = {
  label: '',
  checked: '',
};

export default RadioInput;
