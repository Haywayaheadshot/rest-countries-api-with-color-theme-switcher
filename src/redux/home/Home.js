import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const GET_COUNTRIES = 'REST-COUNTRIES-API-WITH-COLOR-THEME-SWITCHER/src/redux/home/getCountries';

const initialState = [];

const getCountriesApi = 'https://restcountries.com/v3.1/all';

// action creators for display, join and leave missions
export const getCountries = createAsyncThunk(
  GET_COUNTRIES, () => axios.get(getCountriesApi).then((res) => {
    const countries = res.data;
    return countries;
  }),
);

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getCountries.fulfilled, (_, action) => action.payload);
    builder.addCase(getCountries.rejected, (state) => {
      const newState = state;
      newState.status = 'failed';
    });
    builder.addCase(getCountries.pending, (_, action) => action.payload);
  },
});

export default countriesSlice.reducer;
