import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialStateValue = {
  color: '',
};


export const themeSlice = createSlice({
  name: 'counter',
  initialState: initialStateValue,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    changeTextColor: (state, action) => {
      state.color = action.payload;
    },
  },
  
});

export const { changeTextColor } = themeSlice.actions;

export default themeSlice.reducer;
