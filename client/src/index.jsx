import React from 'react';
import ReactDOM from 'react-dom';
import PhotoGallery from './PhotoGallery.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <h1>HEY THERE</h1>
        <PhotoGallery />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));