import React from 'react';
import ThumbnailEntry from './ThumbnailEntry.jsx';

const ThumbnailGallery = (props) => (
  <div className="thumbnail-gallery">
    {props.images.map((image) => 
      <ThumbnailEntry key={ image.gameId } image={ image } handleImageListClick={ props.handleImageListClick } />
      )}
  </div>
);

// ThumbnailGallery.propTypes = {
//   images: React.PropTypes.array.isRequired
// };

export default ThumbnailGallery;