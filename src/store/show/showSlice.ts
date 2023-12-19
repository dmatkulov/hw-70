import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';
import {Show} from '../../types';

interface ShowState {
  shows: Show[];
  isFetching: boolean,
  isError: boolean,
}

const initialState: ShowState = {
  shows: [],
  isFetching: false,
  isError: false,
};

export const showSlice = createSlice({
  name: 'shows',
  initialState,
  reducers: {
    setShows: (state, {payload: shows}: PayloadAction<Show[]>) => {
      state.shows = shows;
    }
  }
});

export const showReducers = showSlice.reducer;

export const {
  setShows,
} = showSlice.actions;

export const selectShows = (state: RootState) => state.shows.shows;

export const selectFetchLoading = (state: RootState) => state.shows.isFetching;

export const selectFetchError = (state: RootState) => state.shows.isError;