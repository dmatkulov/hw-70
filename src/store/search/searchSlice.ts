import {SearchForm} from '../../types';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';

interface SearchState {
  input: SearchForm;
}

const initialState: SearchState = {
  input: {
    value: ''
  }
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    getSearchInput: (state, {payload: inputValue}: PayloadAction<string>) => {
      state.input.value = inputValue;
    }
  }
});

export const searchReducers = searchSlice.reducer;

export const {
  getSearchInput
} = searchSlice.actions;

export const selectSearch = (state: RootState) => state.search.input;
