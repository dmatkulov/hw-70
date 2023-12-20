import React from 'react';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {Link} from 'react-router-dom';
import {getSearchInput, selectShowPreview, showPreview} from '../../store/search/searchSlice';

const ShowList: React.FC = () => {
  const shows = useAppSelector(selectShowPreview);
  const dispatch = useAppDispatch();
  
  const hidePreview = () => {
    dispatch(showPreview(false));
    dispatch(getSearchInput(''));
  };
  
  return (
    <>
      {shows.length > 0 ? (
        <ul className="list-group shadow-lg">
          {shows.map((show) => (
            <Link
              key={show.id}
              className="list-group-item list-group-item-action"
              to={'/shows/' + show.id}
              onClick={hidePreview}
            >
              {show.name}
            </Link>
          ))}
        </ul>
      ) : (
        <ul className="list-group shadow-lg"
        >
          <li className="list-group-item text-center text-secondary py-3">
            No matches
          </li>
        </ul>
      )}
    </>
  );
};

export default ShowList;