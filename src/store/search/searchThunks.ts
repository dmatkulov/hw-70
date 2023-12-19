import {createAsyncThunk} from '@reduxjs/toolkit';
import {Show, ShowPreview} from '../../types';
import {AppDispatch} from '../../app/store';
import axiosApi from '../../axiosApi';
import {setShows} from '../show/showSlice';
import {setShowPreviews} from './searchSlice';

export const fetchShows = createAsyncThunk<Show[], string, { dispatch: AppDispatch }>(
  'search/fetchShows',
  async (searchInput, thunkAPI) => {
    const showsResponse = await axiosApi.get<Show[] | null>(`${searchInput}`);
    const shows = showsResponse.data;
    
    if (!shows) {
      return [];
    }
    
    const showPreviews: ShowPreview[] = shows.map((show) => {
      return {
        id: show.id,
        name: show.name
      };
    });
    
    thunkAPI.dispatch(setShowPreviews(showPreviews));
    thunkAPI.dispatch(setShows(shows));
    
    return shows;
  }
);