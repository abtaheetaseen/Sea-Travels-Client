import React from 'react'
import { Link } from 'react-router-dom'

const SpecificCountryCard = ({item}) => {
  return (
    <div className='flex items-center justify-center border-2 border-slate-400 px-5 py-5 rounded-xl'>
    <div>
      <h1 className='text-lg'>Tourist Spot : <span className='font-light'>{item.touristSpotName}</span></h1>
      <h1 className='text-lg'>Country : <span className='font-light'>{item.countryName}</span></h1>
      <h1 className='text-lg'>Location : <span className='font-light'>{item.location}</span></h1>
      <h1 className='text-lg'>Description : <span className='font-light'>{item.description}</span></h1>
      <h1 className='text-lg'>Cost : <span className='font-light'>{item.averageCost}</span></h1>
      <h1 className='text-lg'>Seasonality : <span className='font-light'>{item.seasonality}</span></h1>
      <div className='mt-5'>
        <Link to={`/touristSpots/${item._id}`}>
            <button className='btn btn-sm btn-error text-white'>
                View Details
            </button>
        </Link>
      </div>
    </div>
    </div>
  )
}

export default SpecificCountryCard
