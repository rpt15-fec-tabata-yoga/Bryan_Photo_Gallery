import React from 'react';

const ImageSlide = (props) => (
  <div className="image_slide">
    {props.images.map((item) => {
      return (
        <img src={item.imageUrl} className="image-item" id={item._id} />
      )
    })}
  </div>
)

export default ImageSlide;