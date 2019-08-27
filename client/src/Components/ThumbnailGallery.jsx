import React from 'react';
import ThumbnailItem from './ThumbnailItem.jsx';

const ThumbnailGallery = ({ thumbnails, handleImageItemClick }) => (
  <div className="thumbnail-gallery">
    {thumbnails.map((thumbnail) => 
      <ThumbnailItem key={ thumbnail.gameId } thumbnail={ thumbnail } handleImageListClick={ handleImageItemClick } />
      )}
  </div>
);

ThumbnailGallery.propTypes = {
  thumbnails: React.PropTypes.array.isRequired
};

export default ThumbnailGallery;