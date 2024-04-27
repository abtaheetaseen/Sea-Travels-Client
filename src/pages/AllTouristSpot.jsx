import React from 'react'
import { useLoaderData, useNavigation } from 'react-router-dom'
import SingleTouristSpot from './SingleTouristSpot';

const AllTouristSpot = () => {

    const touristSpots = useLoaderData();

    const navigation = useNavigation();
    if(navigation.state === "loading") {
        return <div className='flex items-center justify-center'>
    <div className="loading loading-infinity loading-lg min-h-screen "></div>
</div> 
    }

  return (
    <div className='w-10/12 mx-auto my-[50px] grid grid-cols-1 lg:grid-cols-3 gap-10'>
        
      {
        touristSpots.map(touristSpot => <SingleTouristSpot key={touristSpot._id} touristSpot={touristSpot}/>)
      }
      
    </div>
  )
}

export default AllTouristSpot
