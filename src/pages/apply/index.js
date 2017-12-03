import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import scrollToElement from 'scroll-to-element';
import { Validator, checks } from 'form-validation';
import { StudentApplicationForm } from 'components';
import { Persist } from 'react-persist';
import pipedriveApi from '../../lib/pipedrive';
import rules from './Apply.validation.js';

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const initialState = {
  name: '',
  email: '',
  country: '',
  city: '',
  refugee: '',
  programming: '',
  phone: '',
  motivation: '',
  submitMessage: '',
  validationErrors: {},
  reCaptchaWidgetId: '',
  reCaptchaResponse: '',
};

export default class Apply extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.onChange = this.onChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.addStudent = this.addStudent.bind(this);
    // Construct form validation for this component given
    // the rules object defined in `rules`.
    this.validator = new Validator(rules, this);
  }

  componentDidMount() {
    this.state.reCaptchaWidgetId = window.grecaptcha.render('reCaptcha', {
      sitekey: '6LdnZDsUAAAAAPQMvvtdsMnD8dTghWV_mkwyaph3',
      callback: this.addStudent,
    });
  }

  onChange(field) {
    return (value) => {
      this.validator.validateSingleField(field, 'onChange', value);
      if (field === 'phone') {
        if (!checks.isNumeric(value)) return;
        if (value.length > 15) return;
      }
      this.setState({ [field]: value });
    };
  }

  onBlur(field) {
    return value => this.validator.validateSingleField(field, 'onBlur', value);
  }

  onSubmit() {
    if (this.validator.validateAllFields('onSubmit')) {
      window.grecaptcha.execute();
    } else {
      scrollToElement('.title', { align: 'top' });
    }
  }

  getFormUrl() {
    const volunteersForm = {
      URL: 'https://cyf.typeform.com/to/ah1IJ8',
    };
    const mentorsForm = {
      URL: 'https://cyf.typeform.com/to/Cx23Wk',
    };
    // Temporarily removing student typeform to use pipedrive form
    // const StudentForm = {
    //   URL: "https://cyf.typeform.com/to/DmL54Y"
    // }

    let formURL = '';
    switch (this.props.match.params.formType) {
      case 'volunteer':
        formURL = volunteersForm.URL;
        break;
      case 'mentor':
        formURL = mentorsForm.URL;
        break;
      // case "student":
      //   formURL = StudentForm.URL
      //   break;
      default:
        break;
    }
    return formURL;
  }

  addStudent(response) {
    this.setState({
      reCaptchaResponse: response,
    });
    const data = {
      name: this.state.name,
      email: this.state.email,
      country: this.state.country,
      city: this.state.city,
      refugee: this.state.refugee,
      programming: this.state.programming,
      phone: this.state.phone,
      motivation: this.state.motivation,
      reCaptchaResponse: this.state.reCaptchaResponse,
    };

    pipedriveApi
      .addStudent(data)
      .then(() => {
        window.grecaptcha.reset();
        this.setState(initialState);
        this.props.history.push('/apply/success/student');
      })
      .catch((error) => {
        window.grecaptcha.reset()
        if (error.response.status === 401) {
          this.setState({
            submitMessage:
              'Woops! Looks like recaptcha verification failed. Please try submitting again.',
          });
        }
        window.grecaptcha.reset();
        this.setState({
          submitMessage:
            'Woops! Sorry, there was an error while handling your application. Please try again.',
        });
      });
  }

  render() {
    const { formType } = this.props.match.params;
    return (
      <Container>
        <Persist
          name="student-application-form"
          data={this.state}
          debounce={500}
          onMount={data => this.setState(data)}
        />
        {formType === 'student' ? (
          <StudentApplicationForm
            name={this.state.name}
            email={this.state.email}
            country={this.state.country}
            city={this.state.city}
            refugee={this.state.refugee}
            programming={this.state.programming}
            phone={this.state.phone}
            motivation={this.state.motivation}
            submitMessage={this.state.submitMessage}
            onChange={this.onChange}
            onBlur={this.onBlur}
            onSubmit={this.onSubmit}
            validationErrors={this.state.validationErrors}
          />
        ) : (
          <iframe
            id="typeform-full"
            title="typeform-full"
            width="100%"
            height="100%"
            frameBorder="0"
            src={this.getFormUrl()}
          />
        )}
        <div id="reCaptcha" data-size="invisible" />
      </Container>
    );
  }
}

Apply.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};
