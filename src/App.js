import React, { Component } from 'react';
// import './App.css';

class App extends Component {
  render() {
    return (
    <div className="container">
      <div className="row">
        <div className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Miami to New York from $400</span>
              <p>Leaving 10/10/2017</p>
              <p>Returning 12/12/2017</p>
            </div>
            <div className="card-action">
              <a href="#">Book now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
