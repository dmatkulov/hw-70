import React from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';
import ShowPreview from '../../components/ShowPreview/ShowPreview';
import {useAppSelector} from '../../app/hooks';
import {selectPreview} from '../../store/search/searchSlice';

const SearchBlock: React.FC = () => {
  const selectSearchPreview = useAppSelector(selectPreview);

  return (
    <div
      className="mb-5 pb-5 border-bottom"
    >
      <div className="position-relative">
        <SearchForm/>
        {selectSearchPreview && (
          <div className="position-absolute top-20 w-100 shadow-lg">
            <ShowPreview/>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBlock;