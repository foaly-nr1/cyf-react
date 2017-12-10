/* eslint-disable no-useless-escape */
// Check: function taking a value and returning a boolean if that value passes a test.
// Can be used for form validation rules or to restrict the values that a state field
// can contain (e.g. phone number field should only contain numbers).

const emailRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const ukPhoneRegexp = /^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/;
const countWords = textString => textString.trim().split(/\s+/).length;

const isNumeric = value =>
  value.length === 0 || value.match(/^[0-9\+]+$/) != null;
const required = value => !!value;
const minimum50Words = value => required(value) && countWords(value) >= 50;
const email = value => value.length === 0 || value.match(emailRegexp) != null;
const ukPhone = value =>
  value.length === 0 || value.match(ukPhoneRegexp) != null;

export default {
  isNumeric,
  required,
  minimum50Words,
  email,
  ukPhone,
  countWords,
};
