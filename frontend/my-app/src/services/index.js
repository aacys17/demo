import axios from 'axios';
const end_point = 'http://localhost:5000/users/login';
export const loginHandler = async (values) => {
  const payload = JSON.parse(values);
  console.log(payload);

  try {
    const result = await axios.post(end_point, payload);
    return result;
  } catch (error) {
    return error.response;
  }
};
