import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const TouristSpotDetails = () => {
    
    const touristSpots = useLoaderData();
    console.log(touristSpots)
    const {id} = useParams();

    const touristSpot = touristSpots.find(touristSpot => touristSpot._id === id);
    console.log(touristSpot)

  return (
    <div className='min-hscreen grid grid-cols-1 lg:grid-cols-2 w-10/12 mx-auto mt-[50px] mb-[100px] gap-[50px]'>
      <div className='flex justify-center items-center'>
        <img className='rounded-xl' src={touristSpot.photoURL} alt="" />
      </div>

      <div className='flex items-center justify-center'>
        <div>
        
            <h1 className='text-3xl font-bold mt-5 text-center mb-5'>{touristSpot.touristSpotName}</h1>
            <p className='text-center font-medium'>{touristSpot.description}</p>
            <p className='text-center font-medium'>You can experience best in <span className='font-bold text-red-500'>{touristSpot.seasonality}</span> season. More than <span className='font-bold text-red-500'>{touristSpot.totalVisitorsPerYear}</span> visitors visit every year in here.</p>
            <div className='flex items-center justify-around mt-5'>
                <p>Travel Time: {touristSpot.travelTimeDays} days</p>
                <p>Cost: {touristSpot.averageCost}</p>
            </div>
            <div className='flex items-center justify-around mt-5'>
                <p>Location: {touristSpot.location}</p>
                <p>Country: {touristSpot.countryName}</p>
            </div>
            </div>
      </div>
    </div>
  )
}

export default TouristSpotDetails
