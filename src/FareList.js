import React, { Component } from 'react';
import './FareList.css';
import 'whatwg-fetch';

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
        'travelClasses': [
          'Economy'
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
          'popularity',
          'originCity',
          'destinationCity'
        ],
        'markets': [
          'US'
        ],
        'airlineCodes': [
          'ua'
        ],
        'priceFormat': {
          'decimalPlaces': 1,
          'decimalSeparator': '.',
          'thousandSeparator': '_'
        },
        'datePattern': 'MMMM dd, yyyy',
        'languageCode': 'en',
        'faresPerRoute': 10,
        'budget': {
          'currencyCode': 'USD',
          'maximum': 920,
          'minimum': 0
        },
        'routesLimit': 10,
        'flightType': 'rt',
        'dataExpirationWindow': '50d',
        'origins': [
          'MIA'
        ],
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
        <Fare 
        originCity= {this.props.originCity}
        destinationCity= {this.props.destinationCity}
        price= {this.props.price}
        departureDate= {this.props.departureDate}
        returnDate= {this.props.returnDate}
        callToAction= {this.props.callToAction}
        />
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

const Fare = (props) => {
  return (
    <div className="col s12 m6">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">
            {props.originCity} to {props.destinationCity} from {props.price}
          </span>
          <p>Leaving {props.departureDate}</p>
          <p>Returning {props.returnDate}</p>
        </div>
        <div className="card-action">
          <button className="btn waves-effect waves-light">
            {props.callToAction}
          </button>
        </div>
      </div>
    </div>
  )
}


export default FareList;
