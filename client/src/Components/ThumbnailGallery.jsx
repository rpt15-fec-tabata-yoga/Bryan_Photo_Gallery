import React from 'react';
import styles from '../../dist/styles.css'
import ThumbnailEntry from './ThumbnailEntry.jsx';

const ThumbnailGallery = (props) => (
  <div className={styles.thumbnailContainer}>
    <ul className={styles.thumbnailList}>
    {props.images.map((image) => 
      <ThumbnailEntry key={ image.gameId } image={ image } handleImageListClick={ props.handleImageListClick } />
      )}
    </ul>
  </div>
);

// ThumbnailGallery.propTypes = {
//   images: React.PropTypes.array.isRequired
// };

export default ThumbnailGallery;