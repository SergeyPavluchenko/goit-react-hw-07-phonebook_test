import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContactAPI,
  getContactsAPI,
} from 'components/API/contactsMockAPI.js';

export const getContatsThunk = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const data = await getContactsAPI();
    return data;
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async contactData => {
    const data = await addContactAPI(contactData);
    return data;
  }
);
