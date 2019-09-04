import React from 'react';
import styles from '../../dist/styles.css'

const PopUpImage = (props) => (
  <div className={styles.popUpImage}>
    <div className={styles.popUpImageInner}>
      {/* <button onClick={props.closePopUp}>close</button> */}
      <img src={props.image.imageUrl} onClick={props.closePopUp}></img>
    </div>
  </div>
);

export default PopUpImage;