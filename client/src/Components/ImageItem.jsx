import React from 'react';

const ImageItem = ({image}) => (
  <div className="image-item">
    <img className="display-image" src={image.imageUrl}></img>
  </div>
)

ImageItem.propTypes = {
  // image: React.PropTypes.object.isRequired
}

export default ImageItem;