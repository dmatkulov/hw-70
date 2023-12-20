import React from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';
import ShowList from '../../components/ShowList/ShowList';
import {useAppSelector} from '../../app/hooks';
import {selectSearch} from '../../store/search/searchSlice';

const SearchBlock: React.FC = () => {
  const selectSearchValue = useAppSelector(selectSearch);
  
  return (
    <div
      className="mb-5 pb-5"
    >
      <div className="position-relative">
        <SearchForm/>
        {selectSearchValue.length > 2 && (
          <div className="position-absolute top-20 w-100">
            <ShowList/>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBlock;