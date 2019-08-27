var ThumbnailEntry = ({ thumbnail, handleImageListClick }) => (
  // console.log(thumbnail)
  <div className="thumbnail-entry">
    <img className="thumbnail-image" src={thumbnail.imageUrl} onClick={() => handleImageListClick(thumbnail)} alt="" />
  </div>
);

ThumbnailEntry.propTypes = {
  thumbnail: React.PropTypes.object.isRequired
};

export default ThumbnailEntry;