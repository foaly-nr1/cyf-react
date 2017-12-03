import Pipedrive from 'pipedrive';
import { getSSMParameter } from '../../tools';
import addStudent from './actions';

// Get the right pipedrive action depending on the `type` sent.
const pipedriveActions = {
  addStudent,
};

// The Lambda
export default (event, context, callback) => {
  const { type, data } = event.body;
  getSSMParameter(process.env.PIPEDRIVE_API_TOKEN_ALIAS)
    .then(apiToken => new Pipedrive.Client(apiToken))
    .then(pipedrive => {
      const action = pipedriveActions[type];
      return action
        ? action(data, pipedrive, callback)
        : callback('[400] This action type does not exist.');
    });
};
