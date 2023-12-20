import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {getSearchInput, selectFetchLoading, selectSearch} from '../../store/search/searchSlice';
import ButtonSpinner from '../Spinner/ButtonSpinner';
import {fetchShowPreviews} from '../../store/search/searchThunks';

const SearchForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const selectSearchValue = useAppSelector(selectSearch);
  const selectSearchIsFetching = useAppSelector(selectFetchLoading);
  const searchChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(getSearchInput(event.target.value));
  };
  
  useEffect(() => {
    void dispatch(fetchShowPreviews(selectSearchValue));
  }, [dispatch, selectSearchValue]);
  
  return (
    <div
      className="input-group">
      <input
        required
        type="search"
        className="form-control position-relative"
        placeholder="Search for TV Shows..."
        value={selectSearchValue}
        onChange={searchChanged}
      />
      {selectSearchIsFetching && (
        <span
          style={{
            position: 'absolute',
            top: '3px',
            right: '10px',
            zIndex: '10'
          }}
        >
          <ButtonSpinner/>
        </span>
      )}
    </div>
  );
};

export default SearchForm;