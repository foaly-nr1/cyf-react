import axios from 'axios';

const addStudent = data =>
  axios.post(process.env.REACT_APP_PIPEDRIVE_ENDPOINT, {
    type: 'addStudent',
    data,
  });

const addStudentMotivation = data =>
  axios.post(process.env.REACT_APP_PIPEDRIVE_ENDPOINT, {
    type: 'addStudentMotivation',
    data,
  });

export default {
  addStudent,
  addStudentMotivation,
};
