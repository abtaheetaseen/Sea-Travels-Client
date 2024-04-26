import React from 'react'
import TouristSpot from './TouristSpot'

const TouristSpotsSection = ({touristSpots}) => {

    console.log(touristSpots)

  return (
    <>
    <div data-aos="fade-down" className='text-center w-10/12 mx-auto my-[50px]'>
        <h1 className='text-3xl font-extrabold mb-3'>Tourist Spots Section</h1>
        <p>Tourists don't know where they've been, travelers don't know where they're going. Travel makes one modest. You see what a tiny place you occupy in the world.</p>
    </div>

    <div className='w-10/12 mx-auto mt-0 mb-[50px] grid grid-cols-1 lg:grid-cols-2 gap-10'>
        <div className='flex items-center justify-center'>
      {
        touristSpots.map(touristSpot => <TouristSpot key={touristSpot._id} touristSpot={touristSpot}/>)
      }
      </div>
    </div>
    </>
  )
}

export default TouristSpotsSection
