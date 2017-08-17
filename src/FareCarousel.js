import React, { Component } from 'react';
import FareCarouselItem from './FareCarouselItem';
import './index.css';
import 'whatwg-fetch';


class FareCarousel extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      fares: [],
      images: ["https://media.jtdwjcwq6f4wp4ce.com/ua/UA-airTRFX-dallas.jpg"]
    }
    this.loadFares = this.loadFares.bind(this);
    // this.loadImages = this.loadImages.bind(this);
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
        'routesLimit': 2,
        'flightType': 'rt',
        'dataExpirationWindow': '50d'
       })
    }).then(response => {
      return response.json()
    }).then(json => {
      this.setState({
        fares: json.ua
      });

      // Uncomment when google API works again tomorrow
      json.ua.map((route, i) => {
        let googleApi = this.props.imageUrl + route.destination;
        fetch(googleApi)
        .then(function(response) {
          return response.json()
        }).then(json => {
          console.log('success');
          let initialList = this.state.fares;
          let imageUrl = json.items[0].link;
          initialList[i].destinationImageGoogle = imageUrl; 
          this.setState({
            fares: initialList
          });
        }).catch(function(ex) {
          console.log('parsing failed', googleApi)
        })
      });
    })
  }  

  // loadImages(url) {
  //   fetch(url)
  //   .then(function(response) {
  //     return response.json()
  //   }).then(json => {
  //     this.setState({
  //       images: json.items[0].link
  //     });
  //   }).catch(function(ex) {
  //     console.log('parsing failed', ex)
  //   })
  // }

  componentWillMount(props) {
    this.loadFares(this.props.sputnikUrl);
  }
  
  render() {
    return ( 
      <div className="row">        
        <div id="farecarousel" className="carousel carousel-slider center height-restriction valign-wrapper center-align" data-indicators="true">
          <div className="spinner-holder">
            <svg className="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
              <circle className="path" fill="none" strokeWidth="3" strokeLinecap="round" cx="33" cy="33" r="30"></circle>
            </svg>
          </div>
     
          <FareCarouselItem listOfFares={this.state.fares} listOfImages={this.state.images} callToAction={this.props.callToAction} defaultImage={this.props.defaultImage} />
        </div>
      </div>
    );
  }
}

FareCarousel.defaultProps = {
  callToAction: "Book now",
  defaultImage: "http://via.placeholder.com/1500x800"
}

export default FareCarousel;