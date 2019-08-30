import React from 'react';
import styles from '../../dist/styles.css'


var ThumbnailEntry = (props) => (
  // console.log(thumbnail)
  <div>
    <img className={styles.thumbnailImage} src={props.image.imageUrl} onClick={(e) => props.handleImageListClick(props.image)} alt="" />
  </div>
);

// ThumbnailEntry.propTypes = {
//   image: React.PropTypes.object.isRequired
// };

export default ThumbnailEntry;