import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

export const fetchUsers = () => {
  return axios.get(API_URL);
};

export const addNewContact = (contact) => {
  return axios.post(API_URL, contact);
};

export const updateContact = (userId, data) => {
  return axios.put(`${API_URL}/${userId}`, data);
};

export const deleteContact = (userId) => {
  return axios.delete(`${API_URL}/${userId}`);
};
