import axios from 'axios';

const addStudent = data =>
  axios.post(process.env.REACT_APP_PIPEDRIVE_ENDPOINT, {
    type: 'addStudent',
    data,
  });

export default {
  addStudent,
};
