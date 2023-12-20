import React from 'react';
import {Show} from '../../types';
import parse from 'html-react-parser';


interface Props {
  show: Show
}
const Card: React.FC<Props> = ({show}) => {
  return (
    <div className="d-flex justify-content-between gap-5">
      <div className="col-4">
        <img src={show.image.medium} className="img-fluid rounded-start w-100" alt={show.name}/>
      </div>
      <div className="col-7">
        <h1 className="mb-4">{show.name}</h1>
        <p className="border-bottom pb-3 mb-3">
          Summary:
          {parse(show.summary)}
        </p>
        <p>Rating: {show.rating.average}</p>
      </div>
    </div>
  );
};

export default Card;