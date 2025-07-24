import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../initial/initialState.js';

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addPhoneNumber: (state, action) => {
      state.contacts.push(action.payload);
    },
    filterContact: (state, action) => {
      state.filter = action.payload;
    },
    removeContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { addPhoneNumber, filterContact, removeContact } =
  contactSlice.actions;
export const contactReducer = contactSlice.reducer;
