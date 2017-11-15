// Check: function taking a value and returning a boolean if that value passes a test.
// Can be used for form validation rules or to restrict the values that a state field
// can contain (e.g. phone number field should only contain numbers).

const emailRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const isNumeric = value => value.length === 0 || value.match(/^[0-9]+$/) != null;
const required = value => !!value;
const minimum300Words = value => required(value) && value.split(' ').length;
const email = value => value.length === 0 || value.match(emailRegexp) != null;


export default {
  isNumeric,
  required,
  minimum300Words,
  email,
};
