import React from 'react';
import spinner from './spinner.gif';

const Spinner = () => {
  return (
    <div>
      <img src={spinner} style={spinnerStyle} alt="Loading..."/>
    </div>
  )
};

const spinnerStyle = {
  display: 'block',
  width: '200px',
  margin: 'auto'
};

export default Spinner;
