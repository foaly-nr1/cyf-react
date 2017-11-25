import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { ControlLabel, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import ValidationErrors from './ValidationErrors';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)`
  margin: 20px 0 20px 0;
`;

const StyledToggleButton = styled(ToggleButton)`
  height: 7rem;
  display: flex;
  flex-directon: column;
  align-items: center;
  justify-content: center;
`;

const StyledControlLabel = styled(ControlLabel)`
  margin-bottom: 20px;
  text-align: left;
`;

const LabelContainer = styled('div')`
  margin-top: 2rem;
  font-size: 1.8rem;
  font-wight: 500;
`;

const RadioInput = props => (
  <StyledToggleButtonGroup type="radio" name="foo" vertical>
    {props.label && <StyledControlLabel>{props.label}</StyledControlLabel>}
    {props.choices.map(choice => (
      <StyledToggleButton
        onChange={event => props.onChange(event.target.value)}
        onBlur={event => props.onBlur(event.target.value)}
        checked={props.checked === choice.value}
        value={choice.value}
        key={choice.value}
        bsStyle={props.checked === choice.value ? 'success' : undefined}
      >
        <LabelContainer>{choice.label}</LabelContainer>
      </StyledToggleButton>
    ))}
    <ValidationErrors errors={props.errors} />
  </StyledToggleButtonGroup>
);

RadioInput.propTypes = {
  label: PropTypes.string,
  choices: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  })).isRequired,
  checked: PropTypes.string,
  errors: PropTypes.arrayOf(PropTypes.string),
};

RadioInput.defaultProps = {
  label: '',
  checked: '',
  onBlur: () => {},
  errors: [],
};

export default RadioInput;
