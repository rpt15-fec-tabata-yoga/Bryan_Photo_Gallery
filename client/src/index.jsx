import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import styles from '../dist/styles.css'


import ImageItem from './Components/ImageItem.jsx';
import ThumbnailGallery from './Components/ThumbnailGallery.jsx';

class ImageCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameId: window.location.pathname.split('/')[1],
      game_name: window.location.pathname.split('/')[2],
      images: [],
      currentImage: ''
    };

    this.handleImageListClick = this.handleImageListClick.bind(this);
  }

  componentDidMount() {
    $.get(`/api/image/${this.state.gameId}/${this.state.game_name}`, (data) => {
      this.setState({
        images: data,
        currentImage: data[0]
      });
    });
  }

  handleImageListClick(thumbnail) {
    this.setState({
      currentImage: thumbnail
    });
  }

  render() {
    return (
      <div>
        <div>
          <ImageItem image={this.state.currentImage} />
        </div>
        <div>
          <ThumbnailGallery handleImageListClick={this.handleImageListClick} images={this.state.images} />
        </div>
        {/* <div className="wrap">
          <button className="btn-prev" value="Prev" onClick={() => this.nextSlide('prev')}>Previous</button>
          <button className="btn-next" value="Next" onClick={() => this.nextSlide('next')}>Next</button>
        </div> */}
      </div>
    )
  }
}

ReactDOM.render(<ImageCarousel/>, document.getElementById('photogallery'));