import {ShowPreview} from '../../types';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';

interface SearchState {
  input: string;
  showPreviews: ShowPreview[]
  fetchLoading: boolean;
  fetchError: boolean;
}

const initialState: SearchState = {
  input: '',
  showPreviews: [],
  fetchLoading: false,
  fetchError: false,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    getSearchInput: (state, {payload: inputValue}: PayloadAction<string>) => {
      state.input = inputValue;
    },
    setShowPreviews: (state, {payload: shows}: PayloadAction<ShowPreview[]>) => {
      state.showPreviews = shows;
    }
  }
});

export const searchReducers = searchSlice.reducer;

export const {
  getSearchInput,
  setShowPreviews,
} = searchSlice.actions;

export const selectSearch = (state: RootState) => state.search.input;

