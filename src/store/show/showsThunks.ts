import {createAsyncThunk} from '@reduxjs/toolkit';
import {Show, ShowApi} from '../../types';
import axiosApi from '../../axiosApi';

export const fetchShow = createAsyncThunk<Show[], string>(
  'show/fetchShow',
  async (showId) => {
    const showsResponse = await axiosApi.get<ShowApi[] | null>('/search/' + showId);
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