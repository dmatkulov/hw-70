import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {selectShowLoading, selectShows} from '../../store/show/showSlice';
import {useParams} from 'react-router-dom';
import {fetchShow} from '../../store/show/showsThunks';
import Spinner from '../../components/Spinner/Spinner';

const ShowPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectShowLoading);
  const {id} = useParams();
  
  useEffect(() => {
    if (id) {
      dispatch(fetchShow(id));
    }
  }, [dispatch, id]);
  
  const show = useAppSelector(selectShows);
  console.log('Shows in component:', show);
  
  return show && (
    <div>
      {loading && <Spinner/>}
        <div>
          <div className="col-4">
            <img src={show.image.medium} className="img-fluid rounded-start" alt={show.name}/>
          </div>
          <h1>{show.name}</h1>
          {show.summary}
          <p>{show.rating.average}</p>
        </div>
    </div>
  );
};

export default ShowPage;