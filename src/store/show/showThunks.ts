import {createAsyncThunk} from '@reduxjs/toolkit';
import {Show} from '../../types';
import axiosApi from '../../axiosApi';

export const fetchDishes = createAsyncThunk<Show[], undefined>(
  'shows/fetchShows',
  async () => {
    const showsResponse = await axiosApi.get('');
  
  }
);