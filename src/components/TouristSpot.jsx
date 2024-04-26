import React from 'react'

const TouristSpot = ({touristSpot}) => {
  return (
    <div className="card w-[35rem] bg-base-100 shadow-xl image-full">
  <figure><img src={touristSpot.photoURL} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{touristSpot.location}</h2>
    <p>{touristSpot.countryName}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-error btn-sm text-white">View Details</button>
    </div>
  </div>
</div>
  )
}

export default TouristSpot
