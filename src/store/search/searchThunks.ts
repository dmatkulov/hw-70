import {createAsyncThunk} from '@reduxjs/toolkit';
import {ShowApi, ShowPreview} from '../../types';
import axiosApi from '../../axiosApi';
import {AppDispatch} from '../../app/store';
import {showPreview} from './searchSlice';

export const fetchShowPreviews = createAsyncThunk<ShowPreview[], string, {dispatch: AppDispatch}>(
  'search/fetchShows',
  async (searchInput, thunkAPI) => {
    try {
      if (searchInput.length > 2) {
        const showResponse = await axiosApi.get<ShowApi[]>(`/search/shows?q=${searchInput}`);
        const shows = showResponse.data;
        
        if (!shows || shows.length === 0) {
          return [];
        }
        thunkAPI.dispatch(showPreview(true));
        
        return shows.map((showApi) => {
          const { id, name } = showApi.show;
          return {
            id,
            name,
          };
        });
      } else {
        return [];
      }
    } catch (error) {
      console.error('Something went wrong:', error);
      return [];
    }
  }
);
