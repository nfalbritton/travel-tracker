import React from 'react';

const Place = props => {
  return(
    <div className={props.className} onClick={props.handleClick} >{props.name}</div>
  )
}

export default Place;
