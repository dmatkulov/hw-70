import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';
import {Show} from '../../types';
import {fetchShow} from './showsThunks';

interface ShowState {
  shows: Show[];
  isLoading: boolean;
  isError: boolean;
}

const initialState: ShowState = {
  shows: [],
  isLoading: false,
  isError: false,
};

export const showSlice = createSlice({
  name: 'shows',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchShow.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchShow.fulfilled, (state, {payload: shows}) => {
      state.shows = shows;
      state.isLoading = false;
    });
    builder.addCase(fetchShow.rejected, (state) => {
      state.isError = true;
    });
  }
});

export const showReducers = showSlice.reducer;

export const selectShows = (state: RootState) => state.shows.shows;
export const selectShowLoading = (state: RootState) => state.shows.isLoading;
export const selectShowError = (state: RootState) => state.shows.isError;
