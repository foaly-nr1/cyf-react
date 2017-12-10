// Form validation file for <Apply />: the rules that the fields
// of the state of <Apply /> must verify to pass form validation.

const rules = {
  name: [
    {
      check: 'required',
      errorMessage: 'Please enter your full name',
      events: ['onBlur', 'onChange', 'onSubmitFirstForm'],
    },
  ],
  email: [
    {
      check: 'required',
      errorMessage: 'Please enter an email',
      events: ['onBlur', 'onChange', 'onSubmitFirstForm'],
    },
    {
      check: 'email',
      errorMessage: 'Please enter a valid email',
      events: ['onBlur', 'onSubmitFirstForm'],
    },
  ],
  country: [
    {
      check: 'required',
      errorMessage: 'Please tell us from which country you are from',
      events: ['onSubmitFirstForm', 'onChange', 'onBlur'],
    },
  ],
  city: [
    {
      check: 'required',
      errorMessage: 'Please tell us the city you currently live in',
      events: ['onSubmitFirstForm', 'onChange', 'onBlur'],
    },
  ],
  refugee: [
    {
      check: 'required',
      errorMessage: 'Please tell us if you are a refugee',
      events: ['onSubmitFirstForm', 'onChange', 'onBlur'],
    },
  ],
  programming: [
    {
      check: 'required',
      errorMessage: 'Please tell us your programming experience',
      events: ['onSubmitFirstForm', 'onChange', 'onBlur'],
    },
  ],
  phone: [
    {
      check: 'isNumeric',
      errorMessage: 'Please enter a valid phone number',
      events: ['onSubmitFirstForm', 'onBlur', 'onChange'],
    },
    {
      check: 'required',
      errorMessage: 'Please enter a phone number',
      events: ['onSubmitFirstForm', 'onBlur', 'onChange'],
    },
  ],
  motivation: [
    {
      check: 'minimum100Words',
      errorMessage:
        'Please tell us a bit more about your motivation (100 words)',
      events: ['onSubmitSecondForm', 'onBlur'],
    },
  ],
};

export default rules;
