import {createAsyncThunk} from '@reduxjs/toolkit';
import {Show} from '../../types';
import axiosApi from '../../axiosApi';

export const fetchShow = createAsyncThunk<Show, string>(
  'shows/fetchShow',
  async (showId) => {
    const showsResponse = await axiosApi.get<Show>('/shows/' + showId);
    const shows = showsResponse.data;
    return shows ?? null;
  }
);