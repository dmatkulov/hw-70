import {createAsyncThunk} from '@reduxjs/toolkit';
import {Show, ShowApi} from '../../types';
import axiosApi from '../../axiosApi';

export const fetchShows = createAsyncThunk<Show[], string>(
  'search/fetchShows',
  async (searchInput) => {
    const showsResponse = await axiosApi.get<ShowApi[]>('/search/' + searchInput);
    const shows = showsResponse.data;

    if (!shows) {
      return [];
    }

    const newShows: Show[] = shows.map((showApi) => {
      const {id, name, rating, image, summary} = showApi.show;
      return {
        id,
        name,
        rating: {average: rating.average},
        image: {medium: image.medium},
        summary,
      };
    });
    return newShows;
  }
);