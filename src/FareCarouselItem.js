import React from 'react';

const FareCarouselItem = ({listOfFares, callToAction, defaultImage}) => {  

  let uniqueFare = listOfFares.map((route, i) => {
    // console.log("tonto", route)
    return (
      /*<div className="carousel-item red white-text" href="#one!" key={i}>
        <img className="carousel-item-image" src={route.destinationImageGoogle || defaultImage + "?text=" + route.destination} alt="" />
        <h2>{route.origin} to {route.destination} from ${route.fares[0].totalPrice}</h2>
          <p>Leaving {route.fares[0].formattedDepartureDate}</p>
          <p>Returning {route.fares[0].formattedReturnDate}</p>
          <a className="btn waves-effect white grey-text darken-text-2">{callToAction}</a>
      </div>*/
      <div className="carousel-item red" href="#one!" key={i}>
        <img className="carousel-item-image" src={route.destinationImageGoogle || defaultImage + "?text=" + route.destination} alt="" />
        <div className="col s12 m4">
          <div className="card hoverable">
            <div className="card-content">
              <span className="card-title">
                {route.origin} to {route.destination} from ${route.fares[0].totalPrice}
              </span>
              <p>{route.fares[0].departureDate.split("-")[2]} - {route.fares[0].returnDate.split("-")[2]} {route.fares[0].formattedDepartureDate.split(" ")[0]}</p>
            </div>
            <div className="card-action center-align">
              <button className="btn waves-effect waves-light">
                {callToAction}
              </button>
            </div>
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

export default FareCarouselItem;