import React from 'react';

const Fare = ({listOfFares, callToAction}) => {

  let uniqueFare = listOfFares.map((route, i) => {
    return (
      <div className="col s12 m6" key={i}>
        <div className="card hoverable">
          <div className="card-content">
            <span className="card-title">
              {route.origin} to {route.destination} from ${route.fares[0].totalPrice}
            </span>
            <p>Leaving {route.fares[0].formattedDepartureDate}</p>
            <p>Returning {route.fares[0].formattedReturnDate}</p>
          </div>
          <div className="card-action right-align">
            <button className="btn waves-effect waves-light">
              {callToAction}
            </button>
          </div>
        </div>
      </div>
    )
  });

  return (
    <div>
      {uniqueFare}
    </div>
  )
}

export default Fare;