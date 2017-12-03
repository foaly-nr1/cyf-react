import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { ControlLabel, FormControl, FormGroup } from 'react-bootstrap';
import ValidationErrors from './ValidationErrors';

const countWords = textString => textString.trim().split(/\s+/).length;

const Container = styled('Container')`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin: 20px 0 20px 0;
  justify-content: flex-start;
`;

const StyledFormControl = styled(FormControl)``;

const StyledControlLabel = styled(ControlLabel)`
  margin-bottom: 20px;
  text-align: left;
`;

const WordCountContainer = styled('div')`
  margin: 0 0 5px 0;
  text-align: left;
`;

const TextAreaInput = props => (
  <Container>
    <FormGroup>
      {props.label && <StyledControlLabel>{props.label}</StyledControlLabel>}
      {props.wordCount && (
        <WordCountContainer>
          <span>Number of words: {countWords(props.value)}</span>
        </WordCountContainer>
      )}
      <StyledFormControl
        componentClass="textarea"
        rows="20"
        onChange={event => props.onChange(event.target.value)}
        onBlur={event => props.onBlur(event.target.value)}
        placeholder={props.placeholder}
        value={props.value}
        style={{
          color: 'black',
          fontSize: '2rem',
          fontWeight: 500,
        }}
      />
    </FormGroup>
    <ValidationErrors errors={props.errors} />
  </Container>
);

TextAreaInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  wordCount: PropTypes.bool,
  errors: PropTypes.arrayOf(PropTypes.string),
};

TextAreaInput.defaultProps = {
  label: '',
  placeholder: '',
  wordCount: false,
  onBlur: () => {},
  errors: [],
};

export default TextAreaInput;
