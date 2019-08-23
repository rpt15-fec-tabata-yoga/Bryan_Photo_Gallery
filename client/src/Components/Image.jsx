import React from 'react';

const ImageItem = (props) => {
  console.log('ImageItem props ---> ', props.images.imageUrl)
  return (
    <div className="image-slide">
      <h1>{props.images.imageUrl}</h1>
    </div>
  );
}

export default ImageItem;