import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import ImageSlide from './components/ImageSlide.jsx';
import Arrows from './components/Arrows.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: 0,
      images: []
    };

    this.previousSlide = this.previousSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
  }

  // componentDidMount
  componentDidMount() {
    $.get('/api/image', (data) => {
      console.log('DATA HERE ---> ', data);
      this.setState({
        images: data
      });
    });
  }

  previousSlide() {
    const last = imgUrls.length - 1;
    const { currentImage } = this.state;
    const index = 0;
    // const reset = currentImage === 0;
    if(currentImage === 0) {
      index = last;
    } else {
      index = currentImage - 1;
    }

    this.setState({
      currentImage: index
    });
  }
  
  nextSlide() {
    const last = imgUrls.length - 1;
    const { currentImage } = this.state;
    const index = 0;

    if(currentImage === last) {
      index = 0;
    } else {
      index = currentImage + 1;
    }

    this.setState({
      currentImage: index
    });
  }


  render() {
    return (
      <div className="photocarousel">
        <PhotoCarousel />
        <Arrows direction="left" clickFunc={ this.previousSlide }/>
        <ImageSlide url={ imgUrls[this.state.currentImage] }/>
        <Arrows direction="right" clickFunc={ this.nextSlide }/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('photogallery'));