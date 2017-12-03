import axios from 'axios';
import querystring from 'querystring';
import { peopleFrontendToPipedrive } from '../pipedriveTransformer';
import { getSSMParameter } from '../../../tools';

const fields = [
  'name',
  'email',
  'phone',
  'country',
  'city',
  'refugee',
  'programming',
  'motivation',
];

// Add a new student in PipeDrive: Clean the data and make the post request
const addStudent = (data, pipedrive, callback) => getSSMParameter('recaptcha_secret')
  .then(secret => axios.post(
    'https://www.google.com/recaptcha/api/siteverify?',
    querystring.stringify({ secret, response: data.reCaptchaResponse }),
  ))
  .then((response) => {
    if (!response.data.success) return callback(new Error('[401] ReCaptcha failed.'))
    const addPersonRequestBody = {
      ...peopleFrontendToPipedrive(data, fields),
      owner_id: process.env.PIPEDRIVE_GENERAL_USER_ID,
      visible_to: 3,
    };

    const addDealRequestBody = {
      user_id: process.env.PIPEDRIVE_GENERAL_USER_ID,
      visible_to: 3,
      stage_id: process.env.PIPEDRIVE_ADD_STUDENT_STAGE_ID,
      title: `${data.name} deal`,
    };

    return pipedrive.Persons.add(addPersonRequestBody, (error, successData) => {
      if (error) {
        // eslint-disable-next-line no-console
        console.error(error);
        return callback(new Error('[400] Error while adding student.'));
      }
      addDealRequestBody.person_id = successData.id;
      return pipedrive.Deals.add(addDealRequestBody, (error2) => {
        if (error2) {
          // eslint-disable-next-line no-console
          console.error(error2);
          return callback(new Error('[400] Error while adding student.'));
        }
        return callback(null, '[200] Student added successfully.');
      });
    });
  });

export default addStudent;
