import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';
import {ShowPreview} from '../../types';
import {fetchShowPreviews} from './searchThunks';

interface SearchState {
  input: string;
  isPreview: boolean;
  showPreviews: ShowPreview[];
  fetchLoading: boolean;
  fetchError: boolean;
}

const initialState: SearchState = {
  input: '',
  isPreview: false,
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
    showPreview: (state, action: PayloadAction<boolean>) => {
      state.isPreview = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchShowPreviews.pending, (state) => {
      state.fetchLoading = true;
    });
    builder.addCase(fetchShowPreviews.fulfilled, (state, {payload: shows}) => {
      state.fetchLoading = false;
      state.showPreviews = shows;
    });
    builder.addCase(fetchShowPreviews.rejected, (state) => {
      state.fetchError = false;
    });
  }
});

export const searchReducers = searchSlice.reducer;

export const {
  getSearchInput,
  showPreview,
} = searchSlice.actions;

export const selectSearch = (state: RootState) => state.search.input;
export const selectShowPreview = (state: RootState) => state.search.showPreviews;
export const selectPreview = (state: RootState) => state.search.isPreview;
export const selectFetchLoading = (state: RootState) => state.search.fetchLoading;