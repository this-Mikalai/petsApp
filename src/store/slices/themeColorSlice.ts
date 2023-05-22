import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

export type Theme = {
  theme: 'light' | 'dark';
};

const initialState = {
  theme: 'light',
};

// const toggleTheme = createAsyncThunk('', ()=>{
  
// })

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action:PayloadAction<Theme>) => {
      state.theme = action.payload.theme;
      AsyncStorage.setItem('@theme', action.payload.theme)
    },
  },
  extraReducers: (builder) => {},
});

export default themeSlice.reducer;
export const { setTheme } = themeSlice.actions;
