import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import ImageSlide from './components/ImageSlide.jsx';
import Arrows from './components/Arrows.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      currentImage: ''
    };
    
    // this.previousSlide = this.previousSlide.bind(this);
    // this.nextSlide = this.nextSlide.bind(this);
  }

  // componentDidMount
  componentDidMount() {
    $.get('/api/image', (data) => {
      this.setState({
        images: data,
        currentImage: data[0]
      });
    });
  }

  // previousSlide() {
  //   const last = this.state.images.length - 1;
  //   const { currentImage } = this.state;
  //   const index = 0;
  //   // const reset = currentImage === 0;
  //   if(currentImage === 0) {
  //     index = last;
  //   } else {
  //     index = currentImage - 1;
  //   }

  //   this.setState({
  //     currentImage: index
  //   });
  // }
  
  // nextSlide() {
  //   const last = this.state.images.length - 1;
  //   const { currentImage } = this.state;
  //   const index = 0;

  //   if(currentImage === last) {
  //     index = 0;
  //   } else {
  //     index = currentImage + 1;
  //   }

  //   this.setState({
  //     currentImage: index
  //   });
  // }


  render() {
    return (
      <div className="photocarousel">
        {/* <Arrows direction="left" clickFunc={ this.previousSlide }/> */}

        <ImageSlide images={ this.state.images }/>

        {/* <Arrows direction="right" clickFunc={ this.nextSlide }/> */}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('photogallery'));