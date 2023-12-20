import React from 'react';
import {Show} from '../../types';
import parse from 'html-react-parser';
import {Link} from 'react-router-dom';

interface Props {
  show: Show;
}

const Card: React.FC<Props> = ({show}) => {
  
  return (
    <div className="d-flex justify-content-between gap-5">
      <div className="col-4 rounded-4 overflow-hidden">
        <img src={show.image} className="img-fluid rounded-start w-100" alt={show.name}/>
      </div>
      <div className="col-8 d-flex flex-column justify-content-between">
        <div>
          <div className="mb-4">
            <h1 className="mb-2"
            >
              {show.name}
            </h1>
            {show.rating ? (
              <span className="badge text-bg-dark">Rating: {show.rating}</span>
            ) : (
              <span className="badge text-bg-secondary">Not rated</span>
            )}
          </div>
          <div className="px-4 py-2 text-bg-warning rounded-pill mb-3">
            <span className="mb-3 fw-bold">Genres: </span>
            {show.genres.join(', ')}
          </div>
          <div className="p-4 bg-light rounded-3 mb-3">
          <div className="mb-3 fw-bold">Summary:</div>
          {show.summary ? parse(show.summary) : (<span>No summary for this show</span>)}
        </div>
        </div>
        <Link to={show.officialSite}
              className="btn btn-dark"
        >
          Visit site
        </Link>
      </div>
    </div>
  );
};

export default Card;