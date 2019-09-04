import React from 'react';
import styles from '../../dist/styles.css'


const ImageItem = (props) => (
  <div className="image-item">
    <img className={styles.displayImage} src={props.image.imageUrl} onClick={(e) => props.togglePopUp()} alt="" />
  </div>
)

export default ImageItem;