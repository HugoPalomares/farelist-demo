import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FareList from './FareList';
import FareCarousel from './FareCarousel';
import Breadcrumbs from './Breadcrumbs';
import TrfxJson from './TrfxJson';

let sputnikUrl = 'https://openair.airtrfx.com/airfare-sputnik/fares';
let imageUrl = "https://www.googleapis.com/customsearch/v1?key=AIzaSyAMEc_KX9jscJa13Fdz26CfkIXyP46qhm8&cx=004489468580473566222:envuwm11ml4&searchType=image&q=mia"

class Layout extends Component {  
  render() {
    return (
      <div className="container">
        <FareCarousel sputnikUrl={sputnikUrl} imageUrl={imageUrl} />
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