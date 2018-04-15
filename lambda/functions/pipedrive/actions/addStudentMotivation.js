import { peopleFrontendToPipedrive } from '../pipedriveTransformer';

const fields = ['motivation'];

// Add a motivation text to student in PipeDrive: Clean the data and make the post request
const addStudentMotivation = (data, pipedrive, callback) => {
  const updatePersonRequestBody = {
    ...peopleFrontendToPipedrive(data, fields),
    owner_id: process.env.PIPEDRIVE_GENERAL_USER_ID,
    visible_to: 3,
  };

  return pipedrive.Persons.update(
    data.personId,
    updatePersonRequestBody,
    error => {
      if (error) {
        // eslint-disable-next-line no-console
        console.error(error);
        return callback(
          new Error('[400] Error while adding student motivation.'),
        );
      }
      return callback(null, '[200] Student motivation added successfully.');
    },
  );
};
// });

export default addStudentMotivation;
