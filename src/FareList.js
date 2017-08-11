import React, { Component } from 'react';
import './FareList.css';
import 'whatwg-fetch';
import Fare from './Fare';

class FareList extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      fares: []
    };
    this.loadFares = this.loadFares.bind(this);
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
        'faresPerRoute': 10,
        'routesLimit': 10,
        'flightType': 'rt',
        'dataExpirationWindow': '50d'
       })
    }).then(response => {
      return response.json()
    }).then(json => {
      console.log(json)
      this.setState({
        fares: json.ua
      });
      console.log(this.state)
    }).catch(err => {
      console.log(err)
    })
  }

  componentWillMount(props) {
    this.loadFares(this.props.baseUrl);
  }
  
  render() {
    return (
    <div className="container">
      <div className="row">
        <Fare listOfFares={this.state.fares} callToAction={this.props.callToAction} />
      </div>
    </div>
    );
  }
}

FareList.defaultProps = {
  originCity: "Cancun",
  destinationCity: "Tokyo",
  price: "$1200",
  departureDate: "10/10/2017",
  returnDate: "12/12/2017",
  callToAction: "Book now"
}

export default FareList;