import axios from 'axios';

axios.defaults.baseURL = 'https://6887aae6071f195ca9819edd.mockapi.io';

export const getContactsAPI = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};
export const addContactAPI = async contact => {
  const { data } = await axios.post('/contacts', contact);
  return data;
};
