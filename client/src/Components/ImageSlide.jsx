

const ImageSlide = (props) => {
  const style = {
    backgroundImages: `url(${url})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  };

  return (
    <div className="image_slider" style={style}></div>
  )
}

export default ImageSlide;