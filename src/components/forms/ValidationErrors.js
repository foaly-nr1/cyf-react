import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const ErrorSpan = styled('span')`
  color: red;
  font-size: 2rem;
  margin: 10px 0 10px 0;
`;

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ValidationErrors = props => (
  <Container>
    {props.errors.map(error => (
      <ErrorSpan key={error}>
        {error}
      </ErrorSpan>
    ))}
  </Container>
);

ValidationErrors.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ValidationErrors;
