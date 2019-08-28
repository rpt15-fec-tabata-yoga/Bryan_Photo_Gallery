import React from 'react';

var ThumbnailEntry = (props) => (
  // console.log(thumbnail)
  <div className="thumbnail-entry">
    <img className="thumbnail-image" src={props.image.imageUrl} onClick={(e) => props.handleImageListClick(props.image)} alt="" />
  </div>
);

// ThumbnailEntry.propTypes = {
//   image: React.PropTypes.object.isRequired
// };

export default ThumbnailEntry;