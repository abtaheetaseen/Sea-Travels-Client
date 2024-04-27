import React from 'react'
import { Link } from 'react-router-dom'

const SingleTouristSpot = ({touristSpot}) => {
  return (
    <div className='flex items-center justify-center'>
      <div>
      <div className="card w-96 bg-base-100 shadow-2xl">
  <div className="card-body">
    <h2 className="card-title">{touristSpot.touristSpotName}</h2>
    <p>Travel Time: {touristSpot.travelTimeDays}</p>
    <p>Average Cost: {touristSpot.averageCost}</p>
    <p>Visitors Per Year: {touristSpot.totalVisitorsPerYear}</p>
    <p>Seasonality: {touristSpot.seasonality}</p>
    <Link to={`/touristSpots/${touristSpot._id}`}>
        <button className='mt-5 btn btn-sm btn-error text-white'>
            View Details
        </button>
    </Link>
  </div>
  <figure><img src={touristSpot.photoURL} alt="" /></figure>
</div>
      </div>
    </div>
  )
}

export default SingleTouristSpot
