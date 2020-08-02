import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null };

    window.navigator.geolocation.getCurrentPosition(
      (pos) => {
        this.setState({ lat: pos.coords.latitude });
      },
      (err) => console.error(err)
    );
  }

  render() {
    return (
      <div>Latitude: {this.state.lat}</div>
    );
  }
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);