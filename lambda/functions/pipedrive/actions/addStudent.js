import { peopleFrontendToPipedrive } from '../pipedriveTransformer';
import { safeCallback } from '../../../tools';

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
const addStudent = (data, pipedrive, callback) => {
  const requestBody = {
    ...peopleFrontendToPipedrive(data, fields),
    owner_id: process.env.PIPEDRIVE_GENERAL_USER_ID,
    visible_to: 3,
  };

  return pipedrive.Persons.add(requestBody, safeCallback(
    'Student added successfully.',
    'Error while adding student.',
    callback,
  ));
};

export default addStudent;
