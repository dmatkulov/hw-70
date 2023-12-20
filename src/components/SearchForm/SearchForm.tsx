import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {getSearchInput, selectFetchLoading, selectSearch, showPreview} from '../../store/search/searchSlice';
import ButtonSpinner from '../Spinner/ButtonSpinner';
import {fetchShowPreviews} from '../../store/search/searchThunks';

const SearchForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const selectSearchValue = useAppSelector(selectSearch);
  const selectSearchIsFetching = useAppSelector(selectFetchLoading);
  const searchChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(getSearchInput(event.target.value));
  };
  
  const onFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await dispatch(fetchShowPreviews(selectSearchValue));
    dispatch(showPreview(true));
  };
  
  useEffect(() => {
    void dispatch(fetchShowPreviews(selectSearchValue));
    selectSearchValue.length > 3 && dispatch(showPreview(true));
  }, [dispatch, selectSearchValue]);
  
  return (
    <form
      onSubmit={onFormSubmit}
      className="input-group">
      <input
        required
        type="text"
        className="form-control"
        placeholder="SearchForm for TV Shows..."
        value={selectSearchValue}
        onChange={searchChanged}
      />
      <button
        type="submit"
        className={selectSearchIsFetching ? 'btn btn-secondary' : 'btn btn-primary'}
        disabled={selectSearchIsFetching}
      >
        {selectSearchIsFetching && <ButtonSpinner/>}
        Search shows
      </button>
    </form>
  );
};

export default SearchForm;