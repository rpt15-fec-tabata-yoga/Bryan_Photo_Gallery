import React from 'react';
import ReactDOM from 'react-dom';
import PhotoGallery from './components/PhotoGallery.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  // componentDidMount

  render() {
    return (
      <div>
        <div className="photocarousel">
          <h1>HEY THERE</h1>
          <PhotoGallery />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('photogallery'));