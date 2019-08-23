import React from 'react';

const Thumbnails = (props) => {
  console.log(props);
  return (
    <ul className="thumbnails">
      {props.allImages.map((item, index) => {
        <li className={props.currentSlide === index ? 'active' : ''} key={index} onClick={() => props.changeSlide(index)}>{index + 1}</li>
      })};
    </ul>
  );
};

export default Thumbnails;