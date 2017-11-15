// Form validation file for <Apply />: the rules that the fields
// of the state of <Apply /> must verify to pass form validation.

const rules = {
  name: [
    {
      check: 'required',
      errorMessage: 'Please enter your full name',
      events: ['onBlur', 'onChange', 'onSubmit'],
    },
  ],
  email: [
    {
      check: 'required',
      errorMessage: 'Please enter an email',
      events: ['onBlur', 'onChange', 'onSubmit'],
    },
    {
      check: 'email',
      errorMessage: 'Please enter a valid email',
      events: ['onBlur', 'onSubmit'],
    },
  ],
  country: [
    {
      check: 'required',
      errorMessage: 'Please tell us where you are from',
      events: ['onSubmit', 'onChange', 'onBlur'],
    },
  ],
  city: [
    {
      check: 'required',
      errorMessage: 'Please tell us the city you currently live in',
      events: ['onSubmit', 'onChange', 'onBlur'],
    },
  ],
  refugee: [
    {
      check: 'required',
      errorMessage: 'Please tell us if you are a refugee',
      events: ['onSubmit', 'onChange', 'onBlur'],
    },
  ],
  programming: [
    {
      check: 'required',
      errorMessage: 'Please tell us your programming experience',
      events: ['onSubmit', 'onChange', 'onBlur'],
    },
  ],
  phone: [
    {
      check: 'isNumeric',
      errorMessage: 'Please enter a valid phone number',
      events: ['onChange'],
    },
    {
      check: 'required',
      errorMessage: 'Please enter your phone number',
      events: ['onSubmit', 'onChange', 'onBlur'],
    },
  ],
  motivation: [
    {
      check: 'minimum300Words',
      errorMessage: 'Please tell us a bit more about your motivation (300 words)',
      events: ['onSubmit', 'onChange', 'onBlur'],
    },
  ],
};

export default rules;
