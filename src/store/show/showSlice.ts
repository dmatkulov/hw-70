import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';
import {Show} from '../../types';

interface ShowState {
  shows: Show[];
}

const initialState: ShowState = {
  shows: [],
};

export const showSlice = createSlice({
  name: 'shows',
  initialState,
  reducers: {},
});

export const showReducers = showSlice.reducer;

export const selectShows = (state: RootState) => state.shows.shows;
