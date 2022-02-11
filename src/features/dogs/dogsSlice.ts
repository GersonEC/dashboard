import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Dog } from '../../utils/models';
import { fetchDogs } from './dogsApi';

export interface DogsState {
  dogList: Dog[];
  status: 'idle' | 'loading' | 'failed' | 'success';
}

const initialState: DogsState = {
  dogList: [] as Dog[],
  status: 'idle',
};

export const fetchDogsAsync = createAsyncThunk(
  'dogs/fetchDogs',
  async () => {
    const response = await fetchDogs();
    return response;
  }
);

export const dogsSlice = createSlice({
  name: 'dogs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDogsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDogsAsync.fulfilled, (state: DogsState, action) => {
        state.status = 'success';
        state.dogList = action.payload;
      });
  },
});

export const selectDogs = (state: RootState) => state.dogs.dogList;

export default dogsSlice.reducer;
