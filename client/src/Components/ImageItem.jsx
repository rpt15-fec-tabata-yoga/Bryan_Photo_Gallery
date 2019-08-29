import React from 'react';

const ImageItem = (props) => (
  <div className="image-item">
    <img className="display-image" src={props.image.imageUrl} />
  </div>
)

// ImageItem.propTypes = {
//   image: React.PropTypes.object.isRequired
// }

export default ImageItem;