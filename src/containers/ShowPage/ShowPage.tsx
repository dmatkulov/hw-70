import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {selectShowLoading, selectShows} from '../../store/show/showSlice';
import {useParams} from 'react-router-dom';
import {fetchShow} from '../../store/show/showsThunks';
import Spinner from '../../components/Spinner/Spinner';
import Card from '../../components/Card/Card';

const ShowPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const show = useAppSelector(selectShows);
  const loading = useAppSelector(selectShowLoading);
  const {id} = useParams();
  
  useEffect(() => {
    if (id) {
      dispatch(fetchShow(id));
    }
  }, [dispatch, id]);
  
  
  return (
    <div>
      {loading && <Spinner/>}
      {show ? (
        <Card show={show}/>
      ) : (
        <div className="alert alert-light">
          Something went wrong!
        </div>
      )}
    </div>
  );
};

export default ShowPage;