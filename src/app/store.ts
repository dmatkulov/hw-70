import {configureStore} from '@reduxjs/toolkit';
import {showReducers} from '../store/show/showSlice';
import {searchReducers} from '../store/search/searchSlice';

export const store = configureStore({
  reducer: {
    shows: showReducers,
    search: searchReducers,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;