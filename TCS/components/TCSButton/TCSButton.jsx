import React from 'react';

const TCSButton = (props) => {
  const {
    activeButton,
    buttonVal,
    onClick
  } = props;

  const flag = (activeButton === buttonVal);

  return (
      <button
      style={ flag ? {
        backgroundColor: 'white',
        color: 'black'
      } : {
        backgroundColor: 'red',
        color: 'white'
      }}
      onClick={onClick}
       >
       {buttonVal}
      </button>
  );
}

export default TCSButton;
