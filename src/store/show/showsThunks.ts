import {createAsyncThunk} from '@reduxjs/toolkit';
import {Show, Shows} from '../../types';
import axiosApi from '../../axiosApi';

export const fetchShow = createAsyncThunk<Show | null, string>(
  'shows/fetchShow',
  async (showId) => {
    const showsResponse = await axiosApi.get<Shows>('/shows/' + showId);
    const show = showsResponse.data;
    return {
      id: show.id.toString(),
      name: show.name,
      rating: show.rating.average,
      image: show.image.medium,
      summary: show.summary,
      genres: show.genres,
      officialSite: show.officialSite
    } ?? null;
  }
);