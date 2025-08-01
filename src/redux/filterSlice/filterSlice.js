const { createSlice } = require('@reduxjs/toolkit');

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContact: (state, action) => action.payload,
  },
});

export const { filterContact } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
