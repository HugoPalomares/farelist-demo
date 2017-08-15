import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FareList from './FareList';
import Breadcrumbs from './Breadcrumbs';
import TrfxJson from './TrfxJson';

let sputnikUrl = 'https://openair.airtrfx.com/airfare-sputnik/fares';

class Layout extends Component {
  
  render() {
    return (
      <div className="container">
        <Breadcrumbs TrfxJson={TrfxJson} originalUrl={this.props.originalUrl} /> 
        <FareList sputnikUrl={sputnikUrl} />
      </div>
    );
  }
}

Layout.defaultProps = {
    originalUrl: "https://" + TrfxJson.data.widgets.trfx_url
}

ReactDOM.render(<Layout />, document.getElementById('root'));