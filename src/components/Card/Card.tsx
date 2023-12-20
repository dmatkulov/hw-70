import React from 'react';
import {Show} from '../../types';

interface Props {
  show: Show
}
const Card: React.FC<Props> = ({show}) => {
  return (
    <div>
      <div className="col-4">
        <img src={show.image.medium} className="img-fluid rounded-start" alt={show.name}/>
      </div>
      <h1>{show.name}</h1>
      <p>{show.summary}</p>
      <p>{show.rating.average}</p>
    </div>
  );
};

export default Card;