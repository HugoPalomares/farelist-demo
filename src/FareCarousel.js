import React, { Component } from 'react';
import FareCarouselItem from './FareCarouselItem';
import './index.css';
import 'whatwg-fetch';


class FareCarousel extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      fares: [],
      images: []
    }
    this.loadFares = this.loadFares.bind(this);
    this.loadImages = this.loadImages.bind(this);
  }

  loadFares(url) {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'sorting': [
          {
            'usdTotalPrice': 'ASC'
          }
        ],
        'departure': {
          'start': '2017-08-18',
          'end': '2018-09-07'
        },
        'return': {
          'start': '2017-08-21',
          'end': '2018-09-04'
        },
        'outputFields': [
          'returnDate',
          'usdTotalPrice',
          'originCity',
          'destinationCity'
        ],
        'markets': [
          'US'
        ],
        'airlineCodes': [
          'ua'
        ],
        'datePattern': 'MMMM dd, yyyy',
        'languageCode': 'en',
        'faresPerRoute': 1,
        'routesLimit': 20,
        'flightType': 'rt',
        'dataExpirationWindow': '50d'
       })
    }).then(response => {
      return response.json()
    }).then(json => {
      this.setState({
        fares: json.ua
      });
    }).catch(err => {
      console.log(err)
    })
  }  

  loadImages(url) {
    fetch(url)
    .then(function(response) {
      return response.json()
    }).then(json => {
      this.setState({
        images: json.items[0].link
      });
    }).catch(function(ex) {
      console.log('parsing failed', ex)
    })
  }

  componentWillMount(props) {
    this.loadFares(this.props.sputnikUrl);
    this.loadImages(this.props.imageUrl);
  }
  
  render() {
    return (
      <div className="row">
        <div id="farecarousel" className="carousel carousel-slider center height-restriction" data-indicators="true">
          <FareCarouselItem listOfFares={this.state.fares} listOfImages={this.state.images} callToAction={this.props.callToAction} />
        </div>
      </div>
    );
  }
}

FareCarousel.defaultProps = {
  callToAction: "Book now"
}

export default FareCarousel;