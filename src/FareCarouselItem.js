import React from 'react';

const FareCarouselItem = ({listOfFares, callToAction, listOfImages}) => {  

  let uniqueFare = listOfFares.map((route, i) => {
    
    return (
      <div className="carousel-item red white-text" href="#one!" key={i}>
        <img className="carousel-item-image" src={listOfImages} alt="" />
        <h2>{route.origin} to {route.destination} from ${route.fares[0].totalPrice}</h2>
          <p>Leaving {route.fares[0].formattedDepartureDate}</p>
          <p>Returning {route.fares[0].formattedReturnDate}</p>
          <a className="btn waves-effect white grey-text darken-text-2">{callToAction}</a>
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