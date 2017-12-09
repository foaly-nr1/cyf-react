import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const FormOuterContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 768px;
  margin: 50px;
  font-size: 1.7rem;
  @media (max-width: 500px) {
    margin: 20px;
  }
`;

const FormInnerContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-width: 20px 35px 20px 35px;
  border-color: #f3f5f6;
  border-style: solid;
  padding: 30px;
  font-size: 1.8rem;
  @media (max-width: 500px) {
    border-width: 0;
    padding: 10px;
  }
`;

const Form = styled('form')`
  margin-top: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const SubmitErrorSpan = styled('span')`
  color: red;
  font-size: 1.7rem;
  margin: 20px 0 20px 0;
`;

const FormFrame = props => (
  <FormOuterContainer>
    <h3>{props.title}</h3>
    <FormInnerContainer>
      <span className="title">{props.subTitle}</span>
      {!!props.topErrorMessage && (
        <SubmitErrorSpan>{props.topErrorMessage}</SubmitErrorSpan>
      )}
      <Form>{props.children}</Form>
      {!!props.submitMessage && (
        <SubmitErrorSpan>{props.submitMessage}</SubmitErrorSpan>
      )}
      <Button onClick={props.onSubmit}>Submit</Button>
    </FormInnerContainer>
  </FormOuterContainer>
);

FormFrame.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  topErrorMessage: PropTypes.string,
  submitMessage: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};

FormFrame.defaultProps = {
  title: '',
  subTitle: '',
  topErrorMessage: '',
  submitMessage: '',
};

export default FormFrame;
