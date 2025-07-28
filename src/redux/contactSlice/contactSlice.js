import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../initial/initialState.js';
import { addContactThunk, getContatsThunk } from '../../redux/thunk/thunk.js';

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getContatsThunk.pending, (state, action) => {
        state.contacts.isLoading = true;
      })
      .addCase(getContatsThunk.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items = action.payload;
      })
      .addCase(getContatsThunk.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
      })
      .addCase(addContactThunk.pending, state => {
        state.contacts.isLoading = true;
      })
      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items.push(action.payload);
      })
      .addCase(addContactThunk.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
      });
  },
});

export const { addPhoneNumber, filterContact, removeContact } =
  contactSlice.actions;
export const contactReducer = contactSlice.reducer;

// reducers: {
//     addPhoneNumber: (state, action) => {
//       state.contacts.push(action.payload);
//     },
//     filterContact: (state, action) => {
//       state.filter = action.payload;
//     },
//     removeContact: (state, action) => {
//       state.contacts = state.contacts.filter(
//         contact => contact.id !== action.payload
//       );
//     },
//   },
