import checks from './checks';

// On construction, transform the rules object setup in the page's validation
// file for a more efficient lookup.
const createRulesObject = rules => {
  const rulesObject = {};
  Object.keys(rules).forEach(field => {
    rulesObject[field] = {};
    rules[field].forEach(rule => {
      const castRule = Object.assign({}, rule);
      castRule.check = checks[rule.check];
      castRule.events.forEach(event => {
        if (!rulesObject[field][event]) rulesObject[field][event] = [];
        rulesObject[field][event].push(castRule);
      });
    });
  });
  return rulesObject;
};

// Class to get the two validation functions for a component.
class Validator {
  // Constructor to bind the instance to the component.
  constructor(rules, component) {
    this.getState = () => component.state;
    this.setState = component.setState.bind(component);
    this.validateSingleField = this.validateSingleField.bind(this);
    this.validateAllFields = this.validateAllFields.bind(this);
    this.rulesObject = createRulesObject(rules);
  }

  // Apply a validation rule by setting/unsetting it error message in the component's
  // state and returning the corresponding boolean.
  applyRule(rule, field, value) {
    const state = this.getState();
    let fieldErrors =
      state.validationErrors[field] && state.validationErrors[field].slice();
    if (!fieldErrors) fieldErrors = [];
    const idx = fieldErrors.find(
      errorMessage => rule.errorMessage === errorMessage,
    );
    const passed = rule.check(value);

    if (passed && idx) fieldErrors.splice(idx, 1);
    else if (!passed && !idx) fieldErrors.push(rule.errorMessage);
    this.setState(previousState => ({
      ...previousState,
      validationErrors: {
        ...previousState.validationErrors,
        [field]: fieldErrors,
      },
    }));
    return passed;
  }

  // Apply all validation rules for a field/event combination
  // and return false if at least one failed.
  // In practice this is used for onChange/onBlur behaviour.
  validateSingleField(field, event, value) {
    try {
      const checkResults = this.rulesObject[field][event].map(rule =>
        this.applyRule(rule, field, value),
      );
      return checkResults.every(result => result);
    } catch (e) {
      return true;
    }
  }

  // Apply all validation rules for all fields for a given event
  // and return false if validation failed for at least one field failed.
  // In practice this is used for submit behaviour.
  validateAllFields(event) {
    const state = this.getState();
    try {
      const validationResults = Object.keys(this.rulesObject).map(field =>
        this.validateSingleField(field, event, state[field]),
      );
      return validationResults.every(result => result);
    } catch (e) {
      return true;
    }
  }
}

export default Validator;
